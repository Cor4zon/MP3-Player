import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeSong} from "../../features/chosenSongSlice/chosenSongSlice";

const Playlist = () => {
    const trackList = useSelector(state => state.trackList.tracks);
    const dispatch = useDispatch()

    const playTrack = (event) => {
        console.log(event.target.className)
        console.log(trackList);
        for (let track of trackList) {
            if (track.id === +event.target.className) {
                // track.audio.play();
                dispatch(changeSong(+event.target.className))
                console.log(`track duration⌛️: ${track.audio.duration}`)
                break;
            }
        }
    }

    const list = trackList.map((track, id) => {
        return (
            <li key={id} className={track.id} onClick={playTrack}> {track.band} – {track.title}</li>
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
