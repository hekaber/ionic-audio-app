import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AudioRecordProvider} from '../../providers/medias';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  headerTitle: string = "Home";
  private isRecording: boolean = false;

  constructor(public navCtrl: NavController, private medias: AudioRecordProvider) {
  }

  record(){
    this.isRecording = true;
    this.medias.create('test_audio_file');
    this.medias.startRecord();
  }

  stopRecord(){
    this.isRecording = false;
    this.medias.stopRecord();
  }

  recording(){
    return this.isRecording;
  }
}
