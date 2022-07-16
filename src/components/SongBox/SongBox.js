import React from 'react';
import SongImage from "../SongImage/SongImage";
import ControlButtons from "../ControlButtons/ControlButtons";

const SongBox = () => {
    return (
        <div className="songBox__container">
            {/*    Song image*/}
            <SongImage />
            {/*    WaveForm*/}
            {/*    Timeline*/}
            {/*    ControlButtons*/}
            <ControlButtons />
        </div>
    );
};

export default SongBox;
