import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagManagerPage } from './tag-manager';
import {GroupBy} from "../../pipes/group-by";

@NgModule({
  declarations: [
    TagManagerPage,
    GroupBy
  ],
  imports: [
    IonicPageModule.forChild(TagManagerPage),
  ],
  exports: [
    TagManagerPage
  ]
})
export class TagManagerPageModule {}
