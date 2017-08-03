/**
 * Created by hkb on 03.08.17.
 */
export class Popularity {
  public mid: string = "";
  public likes: Array<string> = [];
  public dislikes: Array<string> = [];


  constructor(mid, likes, dislikes){
    this.mid = mid;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}
