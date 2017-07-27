import { Component } from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";
import { AuthProvider } from '../../providers/auth';
import { Observable } from "rxjs";

import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: string = 'HomePage';
  tab2Root: string = 'AboutPage';
  tab3Root: string = 'ContactPage';

  user$: Observable<User>;
  constructor(public navCtrl: NavController,
              private auth: AuthProvider) {
    this.user$ = this.auth.user$;
  }

  logout() {
    this.auth.logout();
  }
}
