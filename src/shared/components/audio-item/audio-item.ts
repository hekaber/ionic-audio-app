import { Component, Input, Output } from '@angular/core';
import {MediasProvider} from '../../../providers/medias';

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

  public fileName : string = '';
  private isPlaying: boolean = false;

  constructor(private medias: MediasProvider) {
    //TODO load file from remote
    this.fileName = 'totofile';
  }

  load(){
    this.fileName = 'totofileLoaded.m4a';
  }

  play(){
    this.isPlaying = true;
  }

  stop(){
    this.isPlaying = false;
  }

  playing(){
    return this.isPlaying;
  }

  ionViewDidLoad(){
    this.fileName = 'totofile.m4a';
  }
}
