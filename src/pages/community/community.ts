import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {MediaProvider} from "../../providers/media";
import {Observable} from "rxjs/Observable";

import {Media} from "../../models/media";
import {AuthProvider} from "../../providers/auth";
import {Popularity} from "../../models/popularity";

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

  public medias$: Observable<Media[]>;
  public popularities$: Observable<Popularity[]>;

  private _popSubscription: any;
  private _popItemSubscription: any;
  private _popularities: Popularity[];

  constructor(public navCtrl: NavController,
              private readonly auth:AuthProvider,
              private mediaProvider: MediaProvider) {
    this.medias$ = mediaProvider.media$;
    this.popularities$ = mediaProvider.popularities$;
    this.mediaProvider.getPopularities();
    this._subscribePopularities();

  }

  ionViewDidLeave(){
    console.log('Left');
    if(this._popSubscription) this._popSubscription.unsubscribe();
    if(this._popItemSubscription) this._popItemSubscription.unsubscribe();
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

  onPopularityNotify(message: any){
    if(message.taste === 'like' || message.taste === 'dislike'){

      this.mediaProvider.getTokenInfo().then(tokenResp => {
        let tokenObj = JSON.parse(tokenResp);
        let token = tokenObj.token;
        this._popItemSubscription = this.mediaProvider.postPopularity(message.mid, message.taste, token)
          .subscribe(
            resp => {
              if(this._popSubscription) {
                this._popSubscription.unsubscribe();
                this.mediaProvider.getPopularities();
                this._subscribePopularities();
              }
              console.log('postpop');
              console.log(resp);
            },
            error2 => {
              console.log(error2);
            }
          );
      });
    }
    else {
      console.log('message not handled');
    }
  }

  private _subscribePopularities() {
    this._popSubscription = this.popularities$.subscribe(pop => {
      this._popularities = pop;
      if (this._popularities.length > 0) {
        this.mediaProvider.getMedias(10, this._popularities);
      }
    });
  }
}
