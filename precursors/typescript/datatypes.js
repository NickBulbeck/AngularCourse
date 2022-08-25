"use strict";
// You can create your own datatypes, and there are many ways of doing this.
// One is to create a class.
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}()); // This on its own is already a datatype. You can add a constructor, of course.
var processMovie = function (movie) {
    // ToDo
};
var Movie1 = /** @class */ (function () {
    function Movie1(title, genre) {
        this.title = title;
        this.genre = genre;
    }
    return Movie1;
}());
var processActor = function (actor) {
    // ToDo
};
var processSong = function (song) {
    // ToDo
};
// bit like an ENUM. It's a datatype that is exactly one of 
// four strings.
var genre = 'Country';
