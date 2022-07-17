import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft, faPause, faPlay, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./ControlButtons.css";

library.add(faCaretLeft);
library.add(faPause);
library.add(faPlay);
library.add(faCaretRight);

const ControlButtons = ({ track }) => {
    const [ isPlay, setIsPlay ] = useState(false);

    const playButton = () => {
        if (isPlay) {
            track.audio.pause();
        } else {
            track.audio.play();
        }
        setIsPlay(!isPlay);
    }

    const prevTrack = () => {
        console.log("Prev track");
    }

    const nextTrack = () => {
        console.log("Next track");
    }

    return (

        <div className="controlButtons__container">
            <span style={{fontSize: 3 + 'em', color: 'red'}} onClick={prevTrack} >
                <FontAwesomeIcon icon="fa-solid-6x fa-caret-left" />
            </span>


            <span style={{fontSize: 3 + 'em', color: 'red'}} onClick={ playButton } >
                { isPlay ?
                    <FontAwesomeIcon icon="fa-solid fa-pause" /> :
                    <FontAwesomeIcon icon="fa-solid fa-play" />
                }

            </span>
            <span style={{fontSize: 3 + 'em', color: 'red'}} onClick={nextTrack} >
                <FontAwesomeIcon icon="fa-solid fa-caret-right" />
            </span>
        </div>
    );
};

export default ControlButtons;
