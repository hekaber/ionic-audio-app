/**
 * Created by hkb on 29.06.17.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
  exports: [
    ContactPage
  ]
})
export class ContactPageModule {}
