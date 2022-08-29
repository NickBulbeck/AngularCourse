import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track-search',
  templateUrl: './track-search.component.html',
  styleUrls: ['./track-search.component.css']
})
export class TrackSearchComponent  {

 
  
  @Output("trackSearch") trackSearchEventEmitter = new EventEmitter<string>();

  handleSearch(searchTerm: string) {
    this.trackSearchEventEmitter.emit(searchTerm);
  }

}
