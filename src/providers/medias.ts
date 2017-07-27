/**
 * Created by hkb on 01.07.17.
 */
import { Injectable } from '@angular/core';
import {MediaPlugin, MediaObject, MediaStatusUpdateCallback, MediaErrorCallback} from '@ionic-native/media';

@Injectable()
export class AudioRecordProvider {

  private file: MediaObject;

  constructor(private media: MediaPlugin) {

  }

  create(
    name: string,
    onStatusUpdate?: MediaStatusUpdateCallback,
    onSuccess?: Function,
    onError?: MediaErrorCallback
  ) {
    //TODO: generate UUID or get title for filename
    let filename: string = name + '.m4a';
    this.file = this.media.create(
      filename,
      onStatusUpdate,
      onSuccess,
      onError
    );
  }

  startRecord(){
    if(this.file) {
      this.file.startRecord();
    }
  }

  stopRecord(){
    if(this.file) {
      this.file.stopRecord();
      this.file.release();
    }
  }

  getFile(): MediaObject{
    return this.file;
  }

}
