import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  headerTitle: string = "Home";

  constructor(public navCtrl: NavController) {
  }
  // TODO: add the functions that will play music from ionic-audio native plugin

}
