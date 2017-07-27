import { Component, Input, Output } from '@angular/core';
import {MediasProvider} from '../../../providers/medias';
import {MediaObject, MediaPlugin} from "@ionic-native/media";

/**
 * Generated class for the AudioItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'audio-item',
  templateUrl: './audio-item.html'
})
export class AudioItemComponent {

  @Input('item-id') itemId;
  auPage = 'AudioPage';
  public fileName : string = '';
  public currentDur: number = 0;
  private _isPlaying: boolean = false;
  private _file: MediaObject;
  private _timer: any;

  constructor(private medias: MediasProvider) {
    //TODO load file from remote
    this.fileName = 'totofile';
    this.medias.create(
      'test_audio_file',
      this.onStatusUpdate,
      this.onSuccess,
      this.onError
    );
    this._file = this.medias.getFile();
  }

  load(){
    this.fileName = 'totofileLoaded.m4a';
  }

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

  ionViewDidLoad(){
    this.fileName = 'totofile.m4a';
  }

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
