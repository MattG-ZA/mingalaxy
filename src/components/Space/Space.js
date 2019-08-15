import React from 'react';
import './Space.css';
import { createSolarSystem } from '../../helpers/SpaceHelper';
import SolarSystem from '../SolarSystem/SolarSystem';

class Space extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            zoom: 1,
            planetObjects: [],
        };
    }

    spaceZoom = (event) => {
        const space = this.refs.space;
        let zoom = 0;

        if (event.deltaY < 0) {
            zoom = this.state.zoom + (this.state.zoom * 0.1); 
        }
        else {
            zoom = this.state.zoom - (this.state.zoom * 0.1);
        }

        space.style.setProperty('--zoom', zoom);
        this.setState({ zoom });
    };

    componentDidMount() {
        const space = this.refs.space;
        space.addEventListener("wheel", this.spaceZoom);

        this.setState({ planetObjects: createSolarSystem() });
    }

    render() {
        return (
            <span>
                <div className='generate-button' onClick={() => { this.setState({ planetObjects: createSolarSystem() }) }}>
                    <span>Generate new system</span>
                </div>
                <span ref='space' className="space-background">
                    {this.state.planetObjects.length > 0 && <SolarSystem planetObjects={this.state.planetObjects} />}
                </span>
            </span>
        );
    }
}

export default Space;