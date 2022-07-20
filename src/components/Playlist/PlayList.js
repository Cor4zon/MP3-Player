import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {changeSong} from "../../features/chosenSongSlice/chosenSongSlice";
import PlayListItem from "../PlayListItem/PlayListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../Icons/Icons";
import "./PlayList.css";


const PlayList = () => {
    const [ hidden, setHidden] = useState(true);
    const trackList = useSelector(state => state.trackList.tracks);

    let currentSongId = useSelector(state => state.chosenSong.song);
    let currentTrack = useSelector(state => state.trackList.tracks.filter(track => track.id === currentSongId));



    const dispatch = useDispatch()

    const changeTrack = (event) => {
        const chosenSongId = +event.target.closest('div').className.split(' ')[1];
        currentTrack[0]?.audio.pause();
        dispatch(changeSong(chosenSongId))
    }

    const list = trackList.map((track, id) => {
        return (
            <PlayListItem key={id} changeTrack={changeTrack} track={track} />
        )
    })

    const togglePlaylist = () => {
        console.log(hidden);
        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    };

    const checkHidden = () => {
        return hidden ? "hidden" : "";
    }

    return (
        <div>
            <span style={{fontSize: 3 + 'em', color: 'white'}} onClick={togglePlaylist} className="menuBtn" >
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </span>

            <div className={"playlist__container " + checkHidden()}>
                <ul>
                    { list }
                </ul>
            </div>
        </div>
    );
};

export default PlayList;
