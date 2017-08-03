import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommunityItemComponent } from './community-item';

@NgModule({
  declarations: [
    CommunityItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CommunityItemComponent
  ]
})
export class CommunityItemComponentModule {}
