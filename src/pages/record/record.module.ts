import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordPage } from './record';
import {HeaderComponentModule} from "../../shared/components/header/header.module";

@NgModule({
  declarations: [
    RecordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordPage),
    HeaderComponentModule,
  ],
  exports: [
    RecordPage
  ]
})
export class RecordPageModule {}
