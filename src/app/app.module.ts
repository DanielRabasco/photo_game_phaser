import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './visuals/topbar/topbar.component';
import { GameManagerComponent } from './game/game-manager/game-manager.component';
import { WelcomeComponent } from './game/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { InstructionsComponent } from './game/instructions/instructions.component'

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    GameManagerComponent,
    WelcomeComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
