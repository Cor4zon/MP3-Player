import React from 'react';
import {useSelector} from "react-redux";

const SongInfo = () => {
    const songId = useSelector(state => state.chosenSong.song);
    const track = useSelector(state => state.trackList.tracks.filter(track => track.id === songId));

    return (
        <div>
            <h1> {track[0]?.band} – {track[0]?.title} </h1>
        </div>
    );
};

export default SongInfo;
