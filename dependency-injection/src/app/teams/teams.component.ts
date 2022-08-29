import { Component } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  teams: string[] = [];

  // the smart component depends on the service to fetch the data
  // to inject the service (which is @Injectable) we add it is as a param to the constructor
  // by marking the param as private TS will create the teamsService prop for us
  constructor(private teamsService: TeamsService) {
    this.teams = teamsService.getAllTeams();
  }

}
