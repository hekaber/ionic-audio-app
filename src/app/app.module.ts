import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { JwtHelper, AuthConfig, AuthHttp } from "angular2-jwt";
import { Http, HttpModule, RequestOptions } from "@angular/http";
import { Storage, IonicStorageModule} from "@ionic/storage";

import { TabsPage } from '../pages/tabs/tabs';
import { MediasProvider } from '../providers/medias';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediaPlugin } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import {AuthProvider} from "../providers/auth";
import {EndpointsProvider} from "../providers/endpoints";
// import { PlayerComponent } from '../shared/components/player/player';

// Auth Factory
export function authHttpServiceFactory(http: Http, options: RequestOptions, storage: Storage) {
  const authConfig = new AuthConfig({
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('jwt')),
  });
  return new AuthHttp(authConfig, http, options);
}

@NgModule({
  declarations: [
    MyApp,
    // TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: 'ionic-audio-app',
      driverOrder: ['localstorage']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EndpointsProvider,
    MediaPlugin,
    File,
    MediasProvider,
    JwtHelper,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, Storage]
    }
  ]
})
export class AppModule {}
