// You can create your own datatypes, and there are many ways of doing this.
// One is to create a class.
class Movie {}// This on its own is already a datatype. You can add a constructor, of course.
const processMovie = (movie:Movie) => {
    // ToDo
}
class Movie1 {
    // TS requires that properties are declared outside of the constructore. JS disnae.
    title: string;
    genre: string;

    constructor(title: string,genre: string) {
        this.title = title;
        this.genre = genre;
    }
}


// Interfaces. (Different from C# or java, BTW.) Don't need a constructor.
interface Actor {
    name: string;
    nationality: string;
}
const processActor = (actor:Actor) => {
    // ToDo
}

// Aliases.
type Song = {
    title: string,
    artist: string
}
const processSong = (song:Song) => {
    // ToDo
}

// unions...
type MusicGenre = 'Blues' | 'Rock' | 'Metal';
// bit like an ENUM. It's a datatype that is exactly one of 
// four strings.
const genre: MusicGenre = 'Rock'; //OK
const genre: MusicGenre = 'Country';