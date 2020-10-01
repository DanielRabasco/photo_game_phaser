import Phaser from 'phaser';
import { Photo } from '../photos/photos.model';
import { GameManagerComponent } from './game-manager/game-manager.component';

export default class GameScene extends Phaser.Scene {

    current_photo:Photo;

    max_moving_step: number = 18;

    moving_step: number;
    fails: number;
    points: number;

    input_detected: boolean = false;

    screen_limit: number = 1700;

    constructor(protected game_manager: GameManagerComponent) {
      super({ key: 'GameScene' });    

      this.moving_step = 1;
      this.fails = 0;
      this.points = 0;
    }

    create() {     
      // Temporary variable to store 'this' value
      var myself = this;
      
      this.load.on('filecomplete-image-photo', function (){
        myself.current_photo.img = myself.add.image(0, 205, 'photo').setScale(0.3, 0.3);
        myself.textures.removeKey('photo');
        myself.game_manager.SetTip(myself.current_photo.GetFirstCharOfName());
        myself.input_detected = true;
      });
      
      this.input.keyboard.on('keydown', function(input){
        if (myself.input_detected && input.key == myself.current_photo.GetFirstCharOfName())
        {
          myself.input_detected = false;
          myself.points += myself.points_function();
          myself.fails = 0;
          myself.moving_step = Math.min(myself.moving_step + 0.5, myself.max_moving_step);
          myself.current_photo.img.destroy();
          myself.addNewImageToScene();
        }
        else{
          myself.fails++;
        }
      });
    }

    async getImages(){
      await this.game_manager.getImagesFromAPI();
      this.addNewImageToScene();
    }

    addNewImageToScene(){
      this.current_photo = this.game_manager.photos.pop();
      this.load.image('photo', this.current_photo.url);
      this.load.start();
    }

    async preload() {
      this.load.image('button_hover', '../assets/playhover.png');  
      this.load.image('button', '../assets/play.png');
      await this.game_manager.getImagesFromAPI();
      this.addNewImageToScene(); 
    }

    update() {
      if (this.current_photo != null && this.current_photo.img != null){
        this.current_photo.img.x += this.moving_step;

        if (this.gameLost()){
          this.game_manager.StartResultsScene(this.points);
          this.sys.game.destroy(true);
        }
      }
    }

    gameLost():boolean{
      return this.current_photo.img.x > this.screen_limit;
    }

    points_function(): number{
      // Value of the score if the first letter pressed is the correct one
      var value_without_fails = 1000* this.moving_step / this.current_photo.img.x;

      // 4 fails supose that the player wont get points for this image
      return (value_without_fails - (value_without_fails * this.fails / 4) );
    }
}
