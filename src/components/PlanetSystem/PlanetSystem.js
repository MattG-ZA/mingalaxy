import React from 'react';
import './PlanetSystem.css';
import Planet from '../Planet/Planet';
import Moon from '../Moon/Moon';
import Orbit from '../Orbit/Orbit';

class PlanetSystem extends React.Component {
    setPlanetSystemStyleProperties() {
        // TTO = Time To Orbit
        const { distance, tto } = this.props;
        const planetSystem = this.refs.planetSystem;

        planetSystem.style.setProperty('--translate', distance + 'px');
        planetSystem.style.setProperty('--tto', tto + 's');
    }

    componentDidMount() {
        this.setPlanetSystemStyleProperties();
    }

    render() {
        const { planetSize, moonObjects } = this.props;

        return (
            <span ref='planetSystem' className='planet-system'>
                <Planet planetSize={planetSize} />
                {moonObjects.map((moon) => {
                    const { index, moonSize, distance, tto } = moon;
                    // Create a complex key to ensure proper re-render
                    const key = index + distance + tto;
                    return <Moon
                        key={key}
                        moonSize={moonSize}
                        distance={distance}
                        tto={tto}
                    />;
                })}
                {moonObjects.map((moon) => {
                    const { index, distance } = moon;
                    const key = index + distance;
                    return <Orbit
                        key={key}
                        distance={distance}
                    />;
                })}
            </span>
        )
    }
}

export default PlanetSystem;