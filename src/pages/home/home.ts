import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { MediaProvider } from "../../providers/media";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

import {Media} from "../../models/media";
import {AuthProvider} from "../../providers/auth";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  headerTitle: string = "Home";
  // private _timerSubscribe:Subscription;
  public medias$:Observable<Media[]>;


  constructor(public navCtrl: NavController,
              private readonly auth:AuthProvider,
              private mediaProvider: MediaProvider) {
    this.medias$ = mediaProvider.media$;
    this.mediaProvider.getMedias();
  }

  logout(){
    this.auth.logout();
  }

  // listMedias(){
  //   let timer:Observable<number> = Observable.timer(2000,1000);
  //   let mediaWatcher:Array<any> = [];
  //   this._timerSubscribe = timer.subscribe((t:number) => {
  //     this.medias.forEach((medias:Media[])=>{
  //       mediaWatcher = [...medias]
  //     })
  //     mediaWatcher.map((media:any)=>{
  //       // if todo.deadline is smaller or equal to current time
  //       // && if todo is NOT already expired
  //       // run isDeadline(todo) to display alert
  //       // if((todo.deadline <= Date.now()) && (todo.expire != true)){
  //       //   return this.isDeadline(t, todo)
  //       // }
  //     })
  //   });
  // }
  // TODO: add the functions that will play music from ionic-audio native plugin

}
