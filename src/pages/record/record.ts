import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AudioRecordProvider} from '../../providers/audiorecord';
import {MediaObject} from "@ionic-native/media";

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
  private isRecording: boolean = false;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;

  private file: MediaObject;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private audioRecordProvider: AudioRecordProvider) {
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
}
