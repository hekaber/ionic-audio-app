import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityPage } from './community';
import {FabbuttonComponentModule} from "../../shared/components/fabbutton/fabbutton.module";
import {HeaderComponentModule} from "../../shared/components/header/header.module";
import {AudioItemComponentModule} from "../../shared/components/audio-item/audio-item.module";

@NgModule({
  declarations: [
    CommunityPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityPage),
    AudioItemComponentModule,
    HeaderComponentModule,
    FabbuttonComponentModule,
  ],
  exports: [
    CommunityPage
  ]
})
export class CommunityPageModule {}
