import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the FabbuttonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'fabbutton',
  templateUrl: './fabbutton.html'
})
export class FabbuttonComponent {

  constructor(public navCtrl: NavController) {
  }

  getRecordPage(){
    this.navCtrl.push('RecordPage');
  }

  getNewImagePage(){
    this.navCtrl.push('NewImagePage');
  }
}
