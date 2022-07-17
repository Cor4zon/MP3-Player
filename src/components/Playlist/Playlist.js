import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

const Playlist = () => {
    const trackList = useSelector(state => state.trackList.tracks);

    const playTrack = (event) => {
        console.log(event.target.className)
        console.log(trackList);
        for (let track of trackList) {
            if (track.title === event.target.className) {
                track.audio.play();
                console.log(`track duration⌛️: ${track.audio.duration}`)
                break;
            }
        }
    }

    const list = trackList.map((track, id) => {
        return (
            <li key={id} className={track.title} onClick={playTrack}> {track.band} – {track.title}</li>
        )
    })

    return (
        <div>
            <ul>
                { list }
            </ul>
        </div>
    );
};

export default Playlist;
