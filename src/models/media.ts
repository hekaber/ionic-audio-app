/**
 * Created by hkb on 28.07.17.
 */
export class Media {
  public name: string = "";
  public type: number = -1;
  public uid: string = "";
  public uploaded: boolean = false;
  public shared: boolean = false;
  public tags: Array<string> = [];

  constructor(name, type, uid, uploaded, shared, tags){
    this.name = name;
    this.type = type;
    this.uid = uid;
    this.uploaded = uploaded;
    this.shared = shared;
    this.tags = tags;
  }
}
