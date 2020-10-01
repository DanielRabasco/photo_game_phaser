import Phaser from 'phaser';

export class Photo {
  name: string = "a";
  url: string;
  public img: Phaser.GameObjects.Image;

  constructor(name:string, url:string){

    // The api sometimes gives null value in the name field, so we can have a valid url with null name.
    // So, by default the name will be 'a'
    if (name != null){
      this.name = name;
    }
    else{
      this.name = "a";
    }
    
    this.url = url;
  }

  public GetFirstCharOfName(): string{
    return this.name.charAt(0);
  }
}