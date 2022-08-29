import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  appMessage = 'Well I never!';

  randomNumber = Math.floor(Math.random() * 10) + 1;
  
  handleRequestEvent(request:string) { // because the output of the 'request' event is a string
    console.log(`The root component received a request: ${request}`)
  }

}
