import React from 'react';
import './SolarSystem.css';
import Star from '../Star/Star';
import Planet from '../Planet/Planet';
import Orbit from '../Orbit/Orbit';

class SolarSystem extends React.Component {
    render() {
        const { planetObjects } = this.props;

        return (
            <span className='system-body'>
                <Star />
                {planetObjects.map((planet) => {
                    const { index, distance, tto } = planet;
                    return <Planet key={index} planetIndex={index} distance={distance} tto={tto} />;
                })}
                {planetObjects.map((planet) => {
                    const { index, distance } = planet;
                    return <Orbit key={index} distance={distance} />;
                })}
            </span>
        );
    }
}

export default SolarSystem;