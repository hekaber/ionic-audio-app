import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TagProvider} from "../../providers/tag";
import {Observable} from "rxjs/Observable";
import {Tag} from "../../models/tag";

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

  public tags$: Observable<Tag[]>;
  private _tags: Tag[];
  private _subscrition: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly tagProvider: TagProvider,
              private readonly alertCtrl: AlertController) {

    this.tags$ = tagProvider.tag$;
    this.tagProvider.getTags();

    this._subscrition = this.tags$.subscribe(tag => {
      this._tags = tag;
      console.log(this._tags);
    });
    console.log(this.tags$);
  }

  ionViewDidLoad() {
    console.log('load');
    console.log(this._tags);
  }

  ionViewDidLeave(){
    console.log('Left');
    this._subscrition.unsubscribe();
  }

  promptForm() {
    let alert = this.alertCtrl.create({
      title: 'Nouveau Tag',
      message: 'Entrez un nom et une description (optionnel) pour ce nouveau tag.',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nom'
        },
        {
          name: 'description',
          placeholder: 'Description'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ajouter',
          handler: data => {
            if(data.name){
              this.save(data);
            }
            else {
              this.doAlert('Veuillez definir un nom pour ce tag.');
              return false;
            }
            console.log(data);
          }
        }
      ]
    });

    alert.present();
  }

  doAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Attention!',
      subTitle: message,
      buttons: ['OK']
    });

    alert.present();
  }

  save(tagData){
    console.log('Saving tag.');
    this.tagProvider.create(tagData);
  }

}
