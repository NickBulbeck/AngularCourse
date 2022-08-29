import { Component, Input } from '@angular/core';
import { Track } from '../models';

@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.css']
})


export class TrackTableComponent  {

  @Input() tracks: Track [] = [];
    // If you just have [] on its own, it'll be an array of Any.
  @Input() searchTerm = '';
  
}
