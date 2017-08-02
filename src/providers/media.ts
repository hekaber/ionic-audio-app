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

  getMedias(limit: number){
    this.storage.get('jwt').then(jwt => {
      let tokenObj = JSON.parse(jwt);
      console.log('The token: ' + tokenObj.token);

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
}
