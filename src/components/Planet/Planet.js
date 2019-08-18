import React from 'react';
import './Planet.css';

class Planet extends React.Component {
    setPlanetStyleProperties() {
        const { planetSize } = this.props;
        const planet = this.refs.planet;

        planet.style.setProperty('--planetSize', planetSize + 'px');
    }

    componentDidMount() {
        this.setPlanetStyleProperties();
    }

    render() {
        return <span ref='planet' className='planet-body' />
    }
}

export default Planet;