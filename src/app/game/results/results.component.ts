import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  score:number;
  private sub:any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  
    ngOnInit() {
      this.sub = this.route
        .params
        .subscribe(params => {
          this.score = +params['score'];
        });
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

    StartScene(){
      this.router.navigate(['app/game-manager']);
    }

    StartMenu(){
      this.router.navigate(['app/welcome']);
    }
}
