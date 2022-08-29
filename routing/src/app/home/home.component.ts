import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  // A Router is an injectable service that can be used to navigate 
  // programatically.
  constructor(private router: Router) {
  }
    handleContactUs() {
      this.router.navigate(["contact"]);

    }

}
