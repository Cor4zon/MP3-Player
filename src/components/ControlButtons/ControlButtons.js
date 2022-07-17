import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft, faPause, faPlay, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./ControlButtons.css";
import {changeSong} from "../../features/chosenSongSlice/chosenSongSlice";

library.add(faCaretLeft);
library.add(faPause);
library.add(faPlay);
library.add(faCaretRight);

const ControlButtons = ({ track, dispatch, playListSize }) => {
    const [ isPlay, setIsPlay ] = useState(false);
    const [ duration, setDuration ] = useState("");
    const [ timePlay, setTimePlay ] = useState(0);

    useEffect(() => {
        const minutes = Math.floor(track?.audio.duration / 60)
        const seconds = Math.floor(track?.audio.duration % 60)
        setDuration(`${minutes}:${seconds}`)
    }, [track]);

    const playButton = () => {
        if (isPlay) {
            track.audio.pause();
        } else {
            track.audio.play();
        }
        setIsPlay(!isPlay);
    }

    const prevTrack = () => {
        stopSong();
        const prevSongId = (track.id === 0) ? playListSize - 1: track.id - 1
        dispatch(changeSong(prevSongId))
    }

    const nextTrack = () => {
        stopSong();
        const nextSongId = (track.id + 1) % playListSize;
        console.log(playListSize);
        console.log(nextSongId);
        dispatch(changeSong(nextSongId));
    }

    const stopSong = () => {
        if (isPlay) {
            track.audio.pause();
            setIsPlay(false);
        }
    }

    return (

        <div className="controlButtons__container">
            <h1>0:00</h1>
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
            <h1>{duration}</h1>
        </div>
    );
};

export default ControlButtons;
