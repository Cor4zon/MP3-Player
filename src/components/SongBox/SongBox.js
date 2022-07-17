import React from 'react';
import SongImage from "../SongImage/SongImage";
import ControlButtons from "../ControlButtons/ControlButtons";
import SongInfo from "../SongInfo/SongInfo";
import {useSelector, useDispatch} from "react-redux";

const SongBox = () => {
    const playListSize = useSelector(state => state.trackList.tracks.length);
    let songId = useSelector(state => state.chosenSong.song);
    let track = useSelector(state => state.trackList.tracks.filter(track => track.id === songId));

    let dispatch = useDispatch();


    return (
        <div className="songBox__container">
            {/*    Song image*/}
            <SongImage />
            <SongInfo track={track?.[0]} />
            <ControlButtons track={track?.[0]} dispatch={dispatch} playListSize={playListSize} />
        </div>
    );
};

export default SongBox;
