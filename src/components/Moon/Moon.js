import React from 'react';
import './Moon.css';

class Moon extends React.Component {
    componentDidMount() {
        const { moonSize, distance, tto } = this.props;
        const moon = this.refs.moon;

        moon.style.setProperty('--moonSize', moonSize + 'px');
        moon.style.setProperty('--translate', distance + 'px');
        moon.style.setProperty('--tto', tto + 's');
    }

    render() {
        return <span ref='moon' className='moon-body' />;
    }
}

export default Moon;