import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultsComponent } from './results/results.component';
import { InstructionsComponent } from './instructions/instructions.component';



@NgModule({
  declarations: [GameManagerComponent, WelcomeComponent, ResultsComponent, InstructionsComponent],
  imports: [
    CommonModule
  ], exports:[
    GameManagerComponent,
    WelcomeComponent
  ]
})
export class GameModule { }
