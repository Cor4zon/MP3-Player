import React from 'react';
import SongImage from "../SongImage/SongImage";
import ControlButtons from "../ControlButtons/ControlButtons";
import SongInfo from "../SongInfo/SongInfo";
import {useSelector} from "react-redux";

const SongBox = () => {
    const songId = useSelector(state => state.chosenSong.song);
    const track = useSelector(state => state.trackList.tracks.filter(track => track.id === songId));

    return (
        <div className="songBox__container">
            {/*    Song image*/}
            <SongImage />
            <SongInfo track={track?.[0]} />
            <ControlButtons track={track?.[0]} />
        </div>
    );
};

export default SongBox;
