import React from 'react';
import {useSelector} from "react-redux";

import SongImage from "../SongImage/SongImage";
import ControlButtons from "../ControlButtons/ControlButtons";
import SongInfo from "../SongInfo/SongInfo";
import TimeLine from "../TimeLine/TimeLine";
import "./SongBox.css";

const SongBox = () => {
    const playListSize = useSelector(state => state.trackList.tracks.length);
    let songId = useSelector(state => state.chosenSong.song);
    let track = useSelector(state => state.trackList.tracks.filter(track => track.id === songId));

    return (
        <div className="songBox__container">
            {/*    Song image*/}
            <SongImage />
            <TimeLine />
            <SongInfo track={track?.[0]} />
            <ControlButtons track={track?.[0]} playListSize={playListSize} />
        </div>
    );
};

export default SongBox;
