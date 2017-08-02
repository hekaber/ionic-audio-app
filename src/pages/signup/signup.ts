import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations'

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  animations: [
    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('1000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(-2000px,0,0)', offset: 0}),
          style({transform: 'translate3d(5px,0,0)', offset: 0.9}),
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
export class SignupPage {

  registerCredentials = { email: '', psw: '' };
  confirm: string = "";
  formState: any = "in";
  signupState: any = "in";
  logoState: any = "in";

  constructor(public readonly navCtrl: NavController,
              private readonly auth: AuthProvider,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController) {
  }

  signup(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Registering ...'
    });

    loading.present();

    if(this.registerCredentials.psw != this.confirm){
      this.handleError("Password does match with confirmation.")
    }
    else{
      console.log(this.registerCredentials);
      this.auth
        .signup(this.registerCredentials)
        .finally(() => loading.dismiss())
        .subscribe(
          () => {},
          err => this.handleError(err));
    }
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
