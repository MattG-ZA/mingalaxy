import React from 'react';
import './SolarSystem.css';
import Star from '../Star/Star';
import PlanetSystem from '../PlanetSystem/PlanetSystem';
import Orbit from '../Orbit/Orbit';

class SolarSystem extends React.Component {
    render() {
        const { starSize, planetObjects } = this.props.solarSystem;

        return (
            <span className='system-body'>
                <Star
                    key={starSize}
                    starSize={starSize}
                />
                {planetObjects.map((planet) => {
                    const { index, planetSize, distance, tto, moonObjects } = planet;
                    // Create a complex key to ensure proper re-render
                    const key = index + distance + tto;
                    return <PlanetSystem
                        key={key}
                        planetSize={planetSize}
                        distance={distance}
                        tto={tto}
                        moonObjects={moonObjects}
                    />;
                })}
                {planetObjects.map((planet) => {
                    const { index, distance } = planet;
                    const key = index + distance;
                    return <Orbit
                        key={key}
                        distance={distance}
                    />;
                })}
            </span>
        );
    }
}

export default SolarSystem;