import React from 'react';
import './Planet.css';
import { planetColours } from '../../config/constants';

class Planet extends React.Component {
    setPlanetStyleProperties() {
        const { planetSize } = this.props;
        const { planet, planetMask } = this.refs;

        // Get an array of possible planet colours
        const colours = planetColours();

        planet.style.setProperty('--planetSize', planetSize + 'px');
        planet.style.setProperty('--planetColour', colours[Math.round(Math.random() * 8)]);
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