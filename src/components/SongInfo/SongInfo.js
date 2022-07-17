import React from 'react';
import {useSelector} from "react-redux";

const SongInfo = () => {
    const chosenSong = useSelector(state => state.chosenSong.song);

    return (
        <div>
            <h1>{chosenSong.band} – {chosenSong.title}</h1>
        </div>
    );
};

export default SongInfo;
