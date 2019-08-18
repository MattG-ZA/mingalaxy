import React from 'react';
import './SpaceBackground.css';

const SpaceBackground = () => {
    return (
        <span>
            <div className="spacebackground-stars" />
            <div className="spacebackground-twinkling" />
            <div className="spacebackground-clouds" />
        </span>
    );
}

export default SpaceBackground;