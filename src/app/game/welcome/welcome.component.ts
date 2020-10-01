import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  StartScene(){
    this.router.navigate(['app/game-manager']);
  }

  ShowInstructions(){
    this.router.navigate(['app/instructions']);
  }
}
