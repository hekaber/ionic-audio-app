/**
 * Created by hkb on 26.07.17.
 */
import { Injectable } from '@angular/core';

declare var process: any;
/*
 Generated class for the EndpointsProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class EndpointsProvider {


  // API_PATH: string = process.env.IONIC_ENV ? "https://damp-peak-74760.herokuapp.com" : "http://192.168.3.50:3000";
  API_PATH: string = "http://192.168.0.200:3000";

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
    return this.API_PATH + "/api/media";
  }

  getMediasForUser(userId: string){
    return this.API_PATH + "/api/user/" + userId + "/medias";
  }

  getPopularityForMedia(mediaId: string){
    return this.API_PATH + "/api/media/" + mediaId + "/popularity";
  }

  getTags(){
    return this.API_PATH + "/api/tag";
  }
}
