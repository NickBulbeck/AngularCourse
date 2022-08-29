import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from './models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

// Provided the HttpClientModule is registered in app.module, we can inject one of thse
// into any service (or component, actually, but we should only really inject it into a
// service)
  constructor(private httpClient: HttpClient) {

  }
  
// Want a method that'll get the tracks from the rest API we've mocked using
// json-service. There are several ways of making an HTTP request in js;
// fetch(), for instance. Could use axios, which is a third-party library.
// Or there's Angular's built-in HTTP client. We'll use fetch() and the 
// built-in.
  getAllTracksWithFetch(): Promise<Track[]> {
// Needs the return keyword in this case, because the service (unlike the typical TreeHouse
// fetch hingmy) isn't rendering anything. It's passing the data to the tracks component, and
// IT renders the stuff.
    return fetch('http://localhost:3000/tracks')
      .then(response => response.json()); //accepts a callback for when the data comes back
  // So, we just return this promise. It disnae contain the data the noo (in execution terms)
  // fetch is OK, but axios (see TreeHouse react course) is much better, apparently.
    }

  getAllTracksWithHTTPClient() {
    // Deals with Observables, not Promises; that's the difference.
    // A Promise deals with only one item of data: make a request, get an object of data back;
    // end. An Observable is a *stream* of events/data items. There may be many things coming
    // back over time. Great for gaming, apparently; though we're not building games, so reactive
    // programming (as it's called) isn't as big for us as some folk make it out to be.
    // The Observer design pattern is an OOD pattern that's been around for a long time, in fact.
    // It's a push pattern; data's being pushed to us, and when it happens we react to it. As
    // opposed to a pull pattern where we're reaching for stuff.
    // to do this, you have to import it into app.module - an import at the top and a modules
    // thing halfway down.
    return this.httpClient.get<Track[]>('http://localhost:3000/tracks');
  }
  
}
