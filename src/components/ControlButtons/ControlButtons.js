import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import {changeSong} from "../../features/chosenSongSlice/chosenSongSlice";
import PlayButton from "./PlayButton/PlayButton";
import "../Icons/Icons";
import "./ControlButtons.css";


const ControlButtons = ({ track, playListSize, showSongTime }) => {
    const [ isPlay, setIsPlay ] = useState(false);
    const [ duration, setDuration ] = useState("");
    let dispatch = useDispatch();

    useEffect(() => {
        const minutes = Math.floor(track?.audio.duration / 60)
        const seconds = Math.floor(track?.audio.duration % 60)
        setDuration(`${minutes}:${seconds}`)
    }, [track]);

    const playTrack = () => {
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

            <PlayButton icon="fa-solid-6x fa-caret-left" changeTrack={prevTrack} />
            { isPlay ?
                <PlayButton icon="fa-solid fa-pause" changeTrack={playTrack} /> :
                <PlayButton icon="fa-solid fa-play" changeTrack={playTrack} />
            }
            <PlayButton icon="fa-solid-6x fa-caret-right" changeTrack={nextTrack} />

            <h1>{duration}</h1>
        </div>
    );
};

export default ControlButtons;
