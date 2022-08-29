import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackTableComponent } from './track-table/track-table.component';
import { TrackSearchComponent } from './track-search/track-search.component';
import { TrackFormComponent } from './track-form/track-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TrackTableComponent,
    TrackSearchComponent,
    TrackFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
