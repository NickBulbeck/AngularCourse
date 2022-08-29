// The ts file is the view-model; the html is the view. That's the ts terminology
// onyway.

import { Component } from '@angular/core';
// This @hingmy is a decorator - it's metadata that Angliar uses to do stuff
// for you. In this case, it's telling you that the class is a component -
// a renderable chunk of code. Basically, every component - as in React - is
// a custom HTML element.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}
