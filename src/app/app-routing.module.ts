import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameManagerComponent } from './game/game-manager/game-manager.component'
import { WelcomeComponent } from './game/welcome/welcome.component'
import { ResultsComponent } from './game/results/results.component'
import { AppComponent } from './app.component';
import { InstructionsComponent } from './game/instructions/instructions.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: "app/welcome",
    pathMatch: 'full'
  },
  { path: 'app',
            component: AppComponent,
            children: [
            {
              path: 'welcome',
              component: WelcomeComponent,
            },
            {
              path: 'game-manager',
              component: GameManagerComponent,
            },
            {
              path: 'results/:score',
              component: ResultsComponent,
            },
            {
              path: 'instructions',
              component: InstructionsComponent,
            }
           ]
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
