import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [
    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),
    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ]),
  ],
})
export class LoginPage {

  logoState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  email:string;
  password:string;
  error:string;

  constructor(public readonly navCtrl: NavController,
              private readonly auth:AuthProvider,
              private readonly modalCtrl: ModalController,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController) {
  }

  openSignup(){
    let modal = this.modalCtrl.create('SignupPage');
    modal.present();
  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.auth
      .login({email:this.email, psw:this.password })
      .finally(() => loading.dismiss())
      .subscribe(
        () => {},
        err => this.handleError(err));
  }

  handleError(error: any) {
    let message: string = `${error.statusText}`;

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}
