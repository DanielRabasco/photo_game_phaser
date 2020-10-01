import Phaser from 'phaser';

export class Photo {
  name: string = "a";
  url: string;
  public img: Phaser.GameObjects.Image;

  constructor(name:string, url:string){
    this.name = name;
    this.url = url;
  }

  public GetFirstCharOfName(): string{
    return this.name.charAt(0);
  }
}