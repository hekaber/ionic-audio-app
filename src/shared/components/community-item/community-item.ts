import { Component, Input, Output } from '@angular/core';
import {AudioRecordProvider} from '../../../providers/audiorecord';
import {MediaObject, MediaPlugin} from "@ionic-native/media";
import { AudioProvider } from 'ionic-audio';

/**
 * Generated class for the CommunityItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'community-item',
  templateUrl: './community-item.html'
})
export class CommunityItemComponent {

  @Input('media_data') media;
  public currentDur: number = 0;
  public likes: string[];
  public dislikes: string[];
  private _isPlaying: boolean = false;
  private _file: MediaObject;
  private _timer: any;

  constructor(private medias: AudioRecordProvider,
              private _audioProvider: AudioProvider) {
    //TODO load file from remote
    this.medias.create(
      'test_audio_file',
      this.onStatusUpdate,
      this.onSuccess,
      this.onError
    );
    this._file = this.medias.getFile();
  }

  // load(){
  //   this.fileName = 'totofileLoaded.m4a';
  // }

  play(){
    this._isPlaying = true;
    this._file.play();
    this._timer = setInterval(() => {
      this._file.getCurrentPosition()
        .then((pos) => {
          //workaround to check when the file finished playing
          if(pos < 0){
            console.log('Audio ended');
            this._isPlaying = false;
            clearInterval(this._timer);
          }
          else {
            this.currentDur = pos;
            console.log(pos + '%');
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // this._file.
    }, 1000);

  }

  stop(){
    this._isPlaying = false;
    this._file.stop();
    clearInterval(this._timer);
  }

  totalDuration(): number{
    //TODO get totalDuration from datas instead of using _file.getDuration()
    return 10;
  }

  playing(){
    return this._isPlaying;
  }

  getDetails(){

  }

  // ionViewDidLoad(){
  // }

  private onStatusUpdate(status){
    console.log(status);
  }

  private onSuccess() {
    console.log('Action is successful.');
  }

  private onError(error) {
    console.error(error.message);
  }
}
