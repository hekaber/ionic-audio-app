import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AudioItemComponent } from './audio-item';

@NgModule({
  declarations: [
    AudioItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AudioItemComponent
  ]
})
export class AudioItemComponentModule {}
