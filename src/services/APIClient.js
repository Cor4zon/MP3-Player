import acdc from "../music/acdc.mp3";
import metallica from "../music/metallica.mp3";
import gunsNroses from "../music/gunsNroses.mp3";
import cent50 from "../music/50cent.mp3";
import eminem from "../music/eminem.mp3";

class Song {
    constructor(band, title, song) {
        this.id = Math.floor(Math.random() * 100);
        this.band = band;
        this.title = title;
        this.audio = new Audio(song);
    }
}

export function getInitialPlaylist() {
    return [
        new Song("Metallica", "Nothing Else Matters", metallica),
        new Song("AC⚡️DC", "Black in Black", acdc),
        new Song("Eminem", "Crazy in Love", eminem),
        new Song("Guns N Roses", "Dont cry", gunsNroses),
        new Song("50cent", "Candy Shop", cent50),
    ]
}



