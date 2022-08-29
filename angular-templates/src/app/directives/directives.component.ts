import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  accountName = 'Smith';
  accountBalance = -100;
  accountTransactions = [
    {date: new Date(), type: 'deposit', amount: 50},    
    {date: new Date(), type: 'withdrawal', amount: 20},    
    {date: new Date(), type: 'withdrawal', amount: 30},    
  ]

  determineClassName() {
    return this.accountBalance < 0 ? "inDebit" : "inCredit";
  }

}
