import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./TimeLine.css";

const TimeLine = ({ timePart=80 }) => {
    return (
        <div className="progress-bar__container">
            <ProgressBar variant="danger" now={timePart} />
        </div>
    );
};

export default TimeLine;
