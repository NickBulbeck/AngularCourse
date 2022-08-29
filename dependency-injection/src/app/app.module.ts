import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
