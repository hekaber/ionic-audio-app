import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordPage } from './record';
import {HeaderComponentModule} from "../../shared/components/header/header.module";
import {FabbuttonComponentModule} from "../../shared/components/fabbutton/fabbutton.module";

@NgModule({
  declarations: [
    RecordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordPage),
    HeaderComponentModule,
    FabbuttonComponentModule
  ],
  exports: [
    RecordPage
  ]
})
export class RecordPageModule {}
