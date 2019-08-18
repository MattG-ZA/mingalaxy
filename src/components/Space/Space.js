import React from 'react';
import './Space.css';
import { createSolarSystem } from '../../helpers/SpaceHelper';
import SolarSystem from '../SolarSystem/SolarSystem';
import SpaceBackground from './ui/SpaceBackground/SpaceBackground';
import GenerateButton from './ui/GenerateButton/GenerateButton';

class Space extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zoom: 1,
            solarSystem: {
                starSize: null,
                planetObjects: []
            },
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

    updateSolarSystem = () => {
        this.setState({ solarSystem: createSolarSystem() });
    }

    componentDidMount() {
        const space = this.refs.space;
        space.addEventListener("wheel", this.spaceZoom);

        this.updateSolarSystem();
    }

    render() {
        return (
            <span>
                <SpaceBackground />
                <GenerateButton updateSolarSystem={this.updateSolarSystem} />
                <span ref='space' className="space-container">
                    {this.state.solarSystem.planetObjects.length > 0 && <SolarSystem solarSystem={this.state.solarSystem} />}
                </span>
            </span>
        );
    }
}

export default Space;