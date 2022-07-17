import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft, faPause, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./ControlButtons.css";

library.add(faCaretLeft);
library.add(faPause);
library.add(faCaretRight);

const ControlButtons = () => {
    return (
        <div className="controlButtons__container">
            <span style={{fontSize: 3 + 'em', color: 'red'}}>
                <FontAwesomeIcon icon="fa-solid-6x fa-caret-left" />
            </span>
            <span style={{fontSize: 3 + 'em', color: 'red'}}>
                <FontAwesomeIcon icon="fa-solid fa-pause" />
            </span>
            <span style={{fontSize: 3 + 'em', color: 'red'}}>
                <FontAwesomeIcon icon="fa-solid fa-caret-right" />
            </span>
        </div>
    );
};

export default ControlButtons;
