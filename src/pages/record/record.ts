import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AudioRecordProvider} from '../../providers/medias';
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

  recording(){
    return this.isRecording;
  }
}
