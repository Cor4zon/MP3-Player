import acdc from "../../music/acdc.mp3";
import {useState, useEffect} from "react";

const Playlist = () => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        setSound(new Audio(acdc));
    }, []);

    const playSound = () => {
        sound.play();
    }
    return (
        <div>
            <ul>
                <button onClick={playSound} >PLAY</button>
                <li>Song Metallica</li>
                <li>Song Metallica</li>
                <li>Song Metallica</li>
                <li>Song Metallica</li>
                <li>Song Metallica</li>
            </ul>
        </div>
    );
};

export default Playlist;
