import {useState, useEffect} from "react";
import {useSelector} from "react-redux";

const Playlist = () => {
    const trackList = useSelector(state => state.trackList.tracks);

    const playTrack = (event) => {
        console.log(event.target.className)
        console.log(trackList);
        switch (event.target.className) {
            case "metallica":
                trackList[0].play();
                break;
            case "acdc":
                trackList.at(-1).play();
                break;
            default:
                console.log("default")
        }
    }
    return (
        <div>
            <ul>
                <li onClick={playTrack} className="metallica">Song Metallica</li>
                <li onClick={playTrack} className="gunsNroses">Song Guns N Roses</li>
                <li onClick={playTrack} className="cent50">Song 50 Cent</li>
                <li onClick={playTrack} className="eminem">Song Eminem</li>
                <li onClick={playTrack} className="acdc">Song AC⚡️DC</li>
            </ul>
        </div>
    );
};

export default Playlist;
