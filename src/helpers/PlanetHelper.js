import { planetColours } from '../config/constants';

export const choosePlanetColour = (distance) => {
    const { nearPlanets, midPlanets, farPlanets } = planetColours();
    const colourIndex = Math.round(Math.random() * 3);
    let planetColour = '';

    if (distance <= 300) {
        planetColour = nearPlanets[colourIndex];
    }
    else if (distance <= 600) {
        planetColour = midPlanets[colourIndex];
    }
    else {
        planetColour = farPlanets[colourIndex];
    }

    return planetColour;
};