export const createSolarSystem = () => {
    // Generate 2 to 7 planets
    const numberOfPlanets = Math.ceil(Math.random() * 6) + 1;
    const planetObjects = [];

    for (let i = 0; i < numberOfPlanets; i++) {
        // This is to ensure planets are in the correct order from the star
        const distance = (i * 100) + Math.ceil(Math.random() * 100) + 50;
        // Setting the TTO to the distance is a nice hack to make further planets orbit slower
        const tto = distance;

        planetObjects.push(
            {
                index: i,
                distance,
                tto,
            }
        );
    }

    return planetObjects;
};