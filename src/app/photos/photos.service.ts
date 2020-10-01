import { Injectable } from '@angular/core';
import { Photo } from './photos.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  	constructor(protected http: HttpClient) { }

  	public getPhotos() /*: Observable<Frase>*/ {
		let clientid = "QBhZ0rpFKjp5J9izJkKzW9ecx8HJ5RF0F407sMlHRLg";
		let url = "https://api.unsplash.com/photos/random?client_id="+ clientid +"&count=20";
		return fetch(url).then(res => res.json());
	}  
}
