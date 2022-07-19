import {useSelector, useDispatch} from "react-redux";
import {changeSong} from "../../features/chosenSongSlice/chosenSongSlice";
import "./PlayList.css";

const PlayList = () => {
    const trackList = useSelector(state => state.trackList.tracks);
    const dispatch = useDispatch()

    const changeTrack = (event) => {
        for (let track of trackList) {
            if (track.id === +event.target.className) {
                dispatch(changeSong(+event.target.className))
                break;
            }
        }
    }

    const list = trackList.map((track, id) => {
        return (
            <li key={id} className={track.id} onClick={changeTrack}> {track.band} – {track.title}</li>
        )
    })

    return (
        <div>
            <ul>
                { list }
            </ul>
        </div>
    );
};

export default PlayList;
