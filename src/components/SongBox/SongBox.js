import React from 'react';
import SongImage from "../SongImage/SongImage";
import ControlButtons from "../ControlButtons/ControlButtons";
import SongInfo from "../SongInfo/SongInfo";

const SongBox = () => {
    return (
        <div className="songBox__container">
            {/*    Song image*/}
            <SongImage />
            <SongInfo />
            {/*    WaveForm*/}
            {/*    Timeline*/}
            {/*    ControlButtons*/}
            <ControlButtons />
        </div>
    );
};

export default SongBox;
