import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputs-and-outputs',
  templateUrl: './inputs-and-outputs.component.html',
  styleUrls: ['./inputs-and-outputs.component.css']
})
export class InputsAndOutputsComponent {
// @Input marks the property as a custom HTML attribute. The name of the
// attribute is the name of the prop unless specified otherwise.
  @Input() message = '';
  @Input("msg") secondMessage = ''
  @Input() magicNumber = 0;

  @Output('request') requestEventEmitter = new EventEmitter<string>();
  // EventEmitter is not foadyb. And mind and import it at line 1 as well.
  // It'll generate an event that bubbles up the tree. And you should specify
  // the type of event it'll emit as well.
  // @Output marks the property as being a custom HTML event.
  // The name of the event is the name of the prop unless otherwise specified.
  // In this case, the parent component will expect an event called 'request'...
  // The source of confusion here is the word "event". It's not an event in the 
  // everyday JavaScript sense - it's not an event object, that is. In this case
  // we've set it to be a string.

  handleSendRequestToParent() {
    this.requestEventEmitter.emit('Can I have a Guiness?');
  }


}
