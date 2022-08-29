import { Component } from '@angular/core';
import { Track } from '../models' // apparently ye cannae add the .ts here
import { TrackService } from '../track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent  {

  // tracks: Track[] = [ // if you use union datatypes in the Track model, you HAVE to have the Track[] assigning
  //   {                 // tracks as a Track array. 
  //     title: "All around my hat",
  //     artist: "Steeleye Span",
  //     album: "All Around My Hat",
  //     genre: "Folk",
  //     stars: 5
  //   },    {
  //     title: "All aroon' mah hat",
  //     artist: "McSteeleye McSpan",
  //     album: "Made it up",
  //     genre: "Scottish Folk",
  //     stars: 5
  //   },    {
  //     title: "Cover of All around my hat",
  //     artist: "Status Quo with Steeleye Span",
  //     album: "YouTube",
  //     genre: "Fun",
  //     stars: 5
  //   },
  //   {
  //     title: "DEATH! MAYHEM! MORE DEATH!",
  //     artist: "Iron Maiden",
  //     album: "Violent Death After Midnight",
  //     genre: "Metal",
  //     stars: 5    }
  // ];

  tracks: Track[] = [];
  searchTerm = '';

  filteredTracks: Track[] = [];

  handleTrackSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredTracks = this.tracks.filter(track => track.title.includes(searchTerm));


  }

  constructor(private trackService: TrackService) {
    trackService.getAllTracksWithFetch()
      .then(tracks => this.tracks=tracks)
      .catch(error => 
        {console.log(error)
      });
    // trackService.getAllTracksWithHTTPClient()
    //   .subscribe(
    //     tracks => this.tracks = tracks,
    //     error => console.log(error)
    //   )
      

  }


}
