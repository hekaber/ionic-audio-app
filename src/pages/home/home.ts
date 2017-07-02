import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {MediasProvider} from '../../providers/medias';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isRecording: boolean = false;

  constructor(public navCtrl: NavController, private medias: MediasProvider) {
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
