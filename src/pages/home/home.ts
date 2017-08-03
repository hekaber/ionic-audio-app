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

  }

  logout(){
    this.auth.logout();
  }

  ionViewWillEnter(){
    this.mediaProvider.getMediasForUser(10);
  }

  getRecordPage(){
    this.navCtrl.push('RecordPage');
  }

  getNewImagePage(){
    this.navCtrl.push('NewImagePage');
  }

  getCommunityPage(){
    this.navCtrl.push('CommunityPage');
  }

  getTagManagerPage(){
    this.navCtrl.push('TagManagerPage');
  }

  // TODO: add the functions that will play music from ionic-audio native plugin

}
