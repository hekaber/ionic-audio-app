import {Observable} from "rxjs/Observable";

import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioRecordProvider} from '../../providers/audiorecord';
import {MediaObject} from "@ionic-native/media";
import {AuthProvider} from "../../providers/auth";
import {TagProvider} from "../../providers/tag";
import {MediaProvider} from "../../providers/media";

import {Tag} from "../../models/tag";

/**
 * Generated class for the RecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  headerTitle: string = 'Record';
  //defined media type to 0 -> means audio
  media = {name: '', type: 0, uid: '', shared: false, uploaded: false, tags: [''], file: {}};
  private isRecording: boolean = false;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;

  private file: MediaObject;

  public tags$: Observable<Tag[]>;
  private _subscription: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly auth: AuthProvider,
              private readonly audioRecordProvider: AudioRecordProvider,
              private readonly tagProvider: TagProvider,
              private readonly mediaProvider: MediaProvider,
              private readonly alertCtrl: AlertController) {

    this.tags$ = tagProvider.tag$;
    this.tagProvider.getTags();
    console.log(this.tags$);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
  }

  // ionViewDidLeave(){
  //   console.log('Left');
  //   this.subscrition.unsubscribe();
  // }

  record(){
    this.isRecording = true;
    this.audioRecordProvider.create('temporary');
    this.audioRecordProvider.startRecord();
  }

  stopRecord(){
    this.isRecording = false;
    this.audioRecordProvider.stopRecord();
  }

  play(){
    if (!this.isRecording){
      this.isPlaying = true;
      this.audioRecordProvider.play()
    }
    else {
      console.log('Cannot play while recording')
    }
  }

  pause(){
    if(!this.isRecording && !this.isPaused){
        this.isPaused = true;
        this.isPlaying = false;
        this.audioRecordProvider.pause();
    }
    else if (this.isPaused){
      this.isPaused = false;
      this.audioRecordProvider.play();
    }
  }

  stop(){
    if(!this.isRecording && this.isPlaying){
      this.isPlaying = false;
      this.audioRecordProvider.stop();
    }
  }

  recording(){
    return this.isRecording;
  }

  playing(){
    return this.isPlaying;
  }

  paused(){
    return this.isPaused;
  }

  save(){
    this.mediaProvider.getTokenInfo().then(
      tokenResp => {
        let tokenObj = JSON.parse(tokenResp);
        this.media.uid = tokenObj.userId;
        this._subscription = this.mediaProvider.create(this.media, tokenObj.token)
          .subscribe(
            resp => {
              this.doAlert('Sauvegarde', 'Tag ' + resp.name +' sauvegarde avec succes.');
            },
            error => {
              this.doAlert("Erreur", "Une erreur s\'est produite durant la sauvegarde. " + error);
            }
          );
      });
  }

  saveFile(){

  }

  doAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [        {
        text: 'OK',
        handler: () => {
          this.navCtrl.pop();
        }
      },]
    });

    alert.present();
  }

  logout(){
    this.auth.logout();
  }
}
