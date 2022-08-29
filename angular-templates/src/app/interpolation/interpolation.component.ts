import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent  {
  myName = 'Nick Bulbeck';
  myEmail = 'nick.bulbeck@bailliegifford.com';
  isEmployed = true;

  getGreeting() {
    return "Hello from The Bears!";
  }

}
