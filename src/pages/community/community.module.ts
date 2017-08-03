import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityPage } from './community';
import {FabbuttonComponentModule} from "../../shared/components/fabbutton/fabbutton.module";
import {HeaderComponentModule} from "../../shared/components/header/header.module";
import {AudioItemComponentModule} from "../../shared/components/audio-item/audio-item.module";
import {CommunityItemComponentModule} from "../../shared/components/community-item/community-item.module";

@NgModule({
  declarations: [
    CommunityPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityPage),
    AudioItemComponentModule,
    CommunityItemComponentModule,
    HeaderComponentModule,
  ],
  exports: [
    CommunityPage
  ]
})
export class CommunityPageModule {}
