import { Injectable } from '@angular/core';

// a service is an object that can be 'injected' into any component that needs it
// services typically house the business logic and communicate with the backend
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  // the service will NOT have hard-coded data; it will pull data from the server
  private teams = ['Geelong', 'Melbourne', 'Sydney', 'Collingwood'];

  getAllTeams() {
    // in reality we would be fetching this data from the server
    return this.teams;
  }
}
