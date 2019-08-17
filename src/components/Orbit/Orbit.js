import React from 'react';
import './Orbit.css';

class Orbit extends React.Component {
    setOrbitStyleProperties() {
        const { distance } = this.props;
        const orbit = this.refs.orbit;

        orbit.style.setProperty('--height', (distance * 2) + 'px');
        orbit.style.setProperty('--width', (distance * 2) + 'px');
    }

    componentDidMount() {
        this.setOrbitStyleProperties();
    }

    render() {
        return <span ref='orbit' className='system-orbit' />;
    }
}

export default Orbit;