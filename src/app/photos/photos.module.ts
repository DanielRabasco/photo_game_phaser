import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosService } from './photos.service';
import { PhotoControllerComponent } from './photo-controller/photo-controller.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PhotoControllerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  PhotosService
]
})
export class PhotosModule { }
