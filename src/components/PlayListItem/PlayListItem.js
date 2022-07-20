import React from 'react';
import "./PlayListItem.css";

const PlayListItem = ({id, track, changeTrack}) => {
    return (
        <div key={id} className={`${"playlist__item " + track.id}`}>
            <li onClick={changeTrack}>
                <p className="track__band"> {track.band} </p>
                <p className="track__title"> {track.title} </p>
            </li>
        </div>
    );
};

export default PlayListItem;
