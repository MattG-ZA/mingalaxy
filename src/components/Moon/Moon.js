import React from 'react';
import './Moon.css';

class Moon extends React.Component {
    setMoonStyleProperties() {
        const { moonSize, distance, tto } = this.props;
        const moon = this.refs.moon;

        moon.style.setProperty('--moonSize', moonSize + 'px');
        moon.style.setProperty('--translate', distance + 'px');
        moon.style.setProperty('--tto', tto + 's');

        this.calculateRotation();
    }

    calculateRotation() {
        const moon = this.refs.moon;

        // Choose a random spawn position and adjust end position accordingly
        let fromPosition = Math.round(Math.random() * 360);
        let toPosition = fromPosition + 360;

        // Determine whether rotation will be clockwise or counter clockwise
        if (Math.round(Math.random()) === 0) {
            fromPosition = fromPosition * -1;
            toPosition = toPosition * -1;
        }

        moon.style.setProperty('--fromPosition', fromPosition + 'deg');
        moon.style.setProperty('--toPosition', toPosition + 'deg');
    }

    componentDidMount() {
        this.setMoonStyleProperties();
    }

    render() {
        return <span ref='moon' className='moon-body' />;
    }
}

export default Moon;