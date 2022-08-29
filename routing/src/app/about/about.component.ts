import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  // the ActivatedRoute service provides info about the current route
  constructor(private activatedRoute: ActivatedRoute) { 
    console.log(activatedRoute.snapshot.params['staffId']);
  }

}
