import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {MediaProvider} from "../../providers/media";
import {Observable} from "rxjs/Observable";

import {Media} from "../../models/media";
import {AuthProvider} from "../../providers/auth";

/**
 * Generated class for the CommunityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {

  public medias$:Observable<Media[]>;

  constructor(public navCtrl: NavController,
              private readonly auth:AuthProvider,
              private mediaProvider: MediaProvider) {
    this.medias$ = mediaProvider.media$;
    this.mediaProvider.getMedias(10);

  }

  logout(){
    this.auth.logout();
  }
  getRecordPage(){
    this.navCtrl.push('RecordPage');
  }

  getNewImagePage(){
    this.navCtrl.push('NewImagePage');
  }

  getTagManagerPage(){
    this.navCtrl.push('TagManagerPage');
  }
}
