import React from 'react';
import './Star.css';

class Star extends React.Component {
    setStarStyleProperties() {
        const { starSize } = this.props;
        const star = this.refs.star;

        star.style.setProperty('--starSize', starSize + 'px');
    }

    componentDidMount() {
        this.setStarStyleProperties();
    }

    render() {
        return <span ref='star' className='star-body' />
    }
}

export default Star;