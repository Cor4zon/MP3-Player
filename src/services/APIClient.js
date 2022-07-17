import acdc from "../music/acdc.mp3";
import metallica from "../music/metallica.mp3";
import gunsNroses from "../music/gunsNroses.mp3";
import cent50 from "../music/50cent.mp3";
import eminem from "../music/eminem.mp3";


class Song {
    constructor(id, band, title, song) {
        this.id = id;
        this.band = band;
        this.title = title;
        this.audio = new Audio(song);
    }
}

export function getInitialPlaylist() {
    return [
        new Song(0, "Metallica", "Nothing Else Matters", metallica),
        new Song(1, "AC⚡️DC", "Black in Black", acdc),
        new Song(2, "Eminem", "Crazy in Love", eminem),
        new Song(3, "Guns N Roses", "Dont cry", gunsNroses),
        new Song(4, "50cent", "Candy Shop", cent50),
    ]
}



