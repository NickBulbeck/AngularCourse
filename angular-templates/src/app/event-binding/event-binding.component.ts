import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  greeting = '';
  counter = 0;
  names: string[] = ['Kevin']; // That's how you do it, BTW.

  handleSayHello() { // Don't have to prefix it 'handle' - it's handy foadyb, though
    console.log('Hello, wurrld!');
    this.greeting = 'Hello, wurrld!';
  }

  handleIncrementCounter() {
    this.counter++;
  }

  handleAddKevin() {
    this.names.push("Kevin");
  }

  handleMouseover(event: MouseEvent) { // Have to Type this. Note the capitals - a type of
    console.log(event);               // 'event' doesn't work. 'Event' does.
  }

}
