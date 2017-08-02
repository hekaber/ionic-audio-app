import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TagProvider} from "../../providers/tag";

/**
 * Generated class for the TagManagerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tag-manager',
  templateUrl: 'tag-manager.html',
})
export class TagManagerPage {

  tag = { name: '', description: '' };


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly tagProvider: TagProvider) {
  }

  save(){
    console.log('Creating');
    this.tagProvider.create(this.tag);
  }
}
