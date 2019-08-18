import React from 'react';
import './GenerateButton.css';

class GenerateButton extends React.Component {
    render() {
        const { updateSolarSystem } = this.props;

        return (
            <div className='generate-button' onClick={updateSolarSystem}>
                <span>Generate new system</span>
            </div>
        );
    }
}

export default GenerateButton;