import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent  {

 message = 'Inflation is near 10%';
 buttonDisabled = false;
 textBoxValue = 'Hello';

getSum() {
  return `1 + 1 = ${1+1}`;
}

}
