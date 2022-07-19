import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./TimeLine.css";

const TimeLine = () => {
    return (
        <div className="progress-bar__container">
            <ProgressBar variant="danger" now={80} />
        </div>
    );
};

export default TimeLine;
