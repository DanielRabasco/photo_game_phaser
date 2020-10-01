import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VisualsModule { }
