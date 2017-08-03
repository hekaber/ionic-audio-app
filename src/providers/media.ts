import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import { Storage } from '@ionic/storage';
import { JwtHelper, AuthHttp } from 'angular2-jwt';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';

import { EndpointsProvider } from './endpoints';
import { Media } from "../models/media";


@Injectable()
export class MediaProvider {

  public media$: Observable<Media[]>;
  private _medias: BehaviorSubject<Media[]>;
  private _dataStore: {  // This is where we will store our data in memory
    medias: Media[]
  };

  constructor(private readonly http: Http,
              private readonly storage: Storage,
              private readonly endpoints: EndpointsProvider) {

    this._dataStore = { medias: [] };
    this._medias = <BehaviorSubject<Media[]>>new BehaviorSubject([]);
    this.media$ = this._medias.asObservable();

  }

  getTokenInfo(): Promise<any>{
    return this.storage.get('login_response');
  }

  create(mediaData, token): Observable<any>{
    // Data format to post
    // {
    // name: {type: String, required: true},
    // type: {type: mediaType, required: true},
    // uid: {type: String, required: true},
    // updated: {type: Date, set: val => Date.now()},
    // uploaded: {type: Boolean, default: false},
    // shared: {type: Boolean, default: false},
    // tags: [String],
    //   file: {type: Object}
    // }

    let headers: Headers = new Headers({'Authorization': 'JWT ' + token});
    let options: RequestOptions = new RequestOptions({headers: headers});
    return this.http.post(this.endpoints.getMedias(), mediaData, options)
      .map(response => response.json());
  }

  getMedias(limit: number){
    this.storage.get('login_response').then(resp => {
      let tokenObj = JSON.parse(resp);
      // console.log('The token: ' + tokenObj.token);

      let headers: Headers = new Headers({'Authorization': 'JWT ' + tokenObj.token});
      let options: RequestOptions = new RequestOptions({headers: headers});
      this.http.get(this.endpoints.getMedias(), options)
        .map(response => response.json())
        .subscribe(
          data => {
            // add new datas to store.medias
            this._dataStore.medias = data.filter((media, index)=>{

              if(index<= limit){
                return media
              }

            });
            // assign new state to observable Medias Subject
            this._medias.next(Object.assign({}, this._dataStore).medias);
          },
          error => {console.log(error)}
        );
    });
  }

  getMediasForUser(limit: number){
    this.storage.get('login_response').then(resp => {
      let tokenObj = JSON.parse(resp);
      console.log('Token : ' + tokenObj.token);
      let headers: Headers = new Headers({'Authorization': 'JWT ' + tokenObj.token});
      let options: RequestOptions = new RequestOptions({headers: headers});
      this.http.get(this.endpoints.getMediasForUser(tokenObj.userId), options)
        .map(response => response.json())
        .subscribe(
          data => {
            // add new datas to store.medias
            this._dataStore.medias = data.filter((media, index)=>{

              if(index<= limit){
                return media
              }

            });
            // assign new state to observable Medias Subject
            this._medias.next(Object.assign({}, this._dataStore).medias);
          },
          error => {console.log(error)}
        );
    });
  }
}
