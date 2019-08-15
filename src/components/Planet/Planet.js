import React from 'react';
import './Planet.css';

class Planet extends React.Component {
    setPlanetStyleProperties() {
        // TTO = Time To Orbit
        const { distance, tto } = this.props;
        const planet = this.refs.planet;

        planet.style.setProperty('--translate', distance + 'px');
        planet.style.setProperty('--tto', tto + 's');
    }

    componentDidUpdate() {
        this.setPlanetStyleProperties();
    }

    componentDidMount() {
        this.setPlanetStyleProperties();
    }

    render() {
        return <span ref='planet' className='planet-body' />
    }
}

export default Planet;