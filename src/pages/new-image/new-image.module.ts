import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewImagePage } from './new-image';

@NgModule({
  declarations: [
    NewImagePage,
  ],
  imports: [
    IonicPageModule.forChild(NewImagePage),
  ],
  exports: [
    NewImagePage
  ]
})
export class NewImagePageModule {}
