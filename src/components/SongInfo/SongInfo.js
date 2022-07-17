import React from 'react';

const SongInfo = ({ track }) => {

    return (
        <div>
            <h1> {track?.band} – {track?.title} </h1>
        </div>
    );
};

export default SongInfo;
