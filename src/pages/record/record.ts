import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AudioRecordProvider} from '../../providers/medias';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private medias: AudioRecordProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
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
