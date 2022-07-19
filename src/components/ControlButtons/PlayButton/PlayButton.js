import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PlayButton = ({ icon, changeTrack }) => {
    return (
        <span style={{fontSize: 3 + 'em', color: 'red'}} onClick={changeTrack} >
            <FontAwesomeIcon icon={icon} />
        </span>
    );
};

export default PlayButton;
