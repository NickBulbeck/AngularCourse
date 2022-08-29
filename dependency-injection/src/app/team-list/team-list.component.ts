import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {

  @Input() teams: string[] = [];
}
