import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AudioRecordProvider} from '../../providers/audiorecord';
import {MediaObject} from "@ionic-native/media";
import {AuthProvider} from "../../providers/auth";
import {TagProvider} from "../../providers/tag";
import {Observable} from "rxjs/Observable";
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
  mediaName: string = '';
  private isRecording: boolean = false;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;

  private file: MediaObject;

  public tags$: Observable<Tag[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly auth: AuthProvider,
              private readonly audioRecordProvider: AudioRecordProvider,
              private readonly tagProvider: TagProvider) {

    this.tags$ = tagProvider.tag$;
    this.tagProvider.getTags();
    console.log(this.tags$);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
  }

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

  }

  saveFile(){

  }

  logout(){
    this.auth.logout();
  }
}
