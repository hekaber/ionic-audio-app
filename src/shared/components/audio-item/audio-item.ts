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

  private isPlaying: boolean = false;

  constructor(private medias: MediasProvider) {
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
}
