import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  // title = 'my-first-angliar-app'; this is supplied by ng new...
  myName = 'Nick Bulbeck';
  numLikes = 0;
  // Inside a class, a function disnae need the 'function' keyword
  handleLike() {
    this.numLikes += 1;
  }

}
