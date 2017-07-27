/**
 * Created by hkb on 26.07.17.
 */
import { Injectable } from '@angular/core';

/*
 Generated class for the EndpointsProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class EndpointsProvider {

  API_PATH: string = "http://localhost:3000";

  getAuth(){
    return this.API_PATH + "/api/user/authenticate";
  }

  getLogin(){
    return this.API_PATH + "/login";
  }

  getSignup(){
    return this.API_PATH + "/signin";
  }

  getMedias(){
    return this.API_PATH + "/api/media"
  }

}
