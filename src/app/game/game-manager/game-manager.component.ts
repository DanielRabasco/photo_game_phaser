import { Component, OnInit } from '@angular/core';
import Phaser, { Game } from 'phaser';
import { Router } from '@angular/router';
import GameScene from '../GameScene';
import { PhotosService } from '../../photos/photos.service';
import { Photo } from '../../photos/photos.model'

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css']
})
export class GameManagerComponent implements OnInit {

	  phaserGame: Phaser.Game;
	  config: Phaser.Types.Core.GameConfig;

	  photos: Photo[] = [];

	  first_letter_tip: string;

	  constructor(private router:Router, protected photos_service: PhotosService) { 
	  	this.config = {
	      type: Phaser.WEBGL,
	      height: 400,
		  width: 1820,
	      scene: [ new GameScene(this)],
		  parent: 'gameContainer',
		  "transparent": true
	    };
	  }

	  ngOnInit(): void {
		  // Initialize game
		  this.phaserGame = new Phaser.Game(this.config);	  
	  }

	  async getImagesFromAPI(){
		var self = this;
		await this.photos_service.getPhotos().then(res => 
		  res.forEach(element => {
			self.photos.push(new Photo(element.alt_description, element.urls.regular))
		  }));        
	  }

	  public StartResultsScene(score: number){
		this.router.navigate(['app/results', score]);
	  }

	  public SetTip(tip: string){
		this.first_letter_tip = tip;
	  }
}
