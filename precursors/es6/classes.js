// ES5
// constructor function, so-called
function Movie(title,genre,year) {
    // 'this' refers to the current object. 
    this.title = title;
    this.genre = genre;
    this.year = year;
}

var movie = new Movie('blub''blub',2022);
// the 'new' keyword results in the creation of an empty object,
// which is passed to the constructor function and referenced by
// 'this' therein.

// ES6
// a class is template for creating nobjects.
// You could do this using JavaScript prototypes in ES5, but it was
// tedious and complex.
class Song {
    // functions inside a class don't have to be prefixed by the wurrd
    // 'function'
    constructor('title','artist','key') {
        this.title = title;
        this.artist = artist;
        this.key = key;
    }

    play() {
        // ToDo
    }
}

const song = new Song('Killer Queen','Queen','Cm');
song.play(); // Won't do anything with the above 'ToDo' code, of course

// You can have inheritance, but you generally won't use this in Angliar.