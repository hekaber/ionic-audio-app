import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagManagerPage } from './tag-manager';

@NgModule({
  declarations: [
    TagManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(TagManagerPage),
  ],
  exports: [
    TagManagerPage
  ]
})
export class TagManagerPageModule {}
