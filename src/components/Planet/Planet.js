import React from 'react';
import './Planet.css';
import { choosePlanetColour } from '../../helpers/PlanetHelper';

class Planet extends React.Component {
    setPlanetStyleProperties() {
        const { planetSize, distance } = this.props;
        const { planet, planetMask } = this.refs;

        const planetColour = choosePlanetColour(distance);

        planet.style.setProperty('--planetSize', planetSize + 'px');
        planet.style.setProperty('--planetColour', planetColour);
        planetMask.style.setProperty('--planetSize', planetSize + 'px');
    }

    componentDidMount() {
        this.setPlanetStyleProperties();
    }

    render() {
        return (
            <span className='planet-container'>
                <span ref='planet' className='planet-body' />
                <span ref='planetMask' className='planet-mask' />
            </span>
        );
    }
}

export default Planet;