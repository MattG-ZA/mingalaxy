export const createSolarSystem = () => {
    // Generate 2 to 7 planets
    const numberOfPlanets = Math.ceil(Math.random() * 6) + 1;
    const planetObjects = [];

    for (let i = 0; i < numberOfPlanets; i++) {
        // This is to ensure planets are in the correct order from the star
        const distance = (i * 100) + Math.ceil(Math.random() * 100) + 50;
        // Setting the TTO to the distance is a nice hack to make further planets orbit slower
        const tto = distance;
        
        // Generate 0 to 2 moons
        const numberOfMoons = Math.floor(Math.random() * 3);
        const moonObjects = [];

        for (let j = 0; j < numberOfMoons; j++) {
            const distance = (j * 10) + Math.ceil(Math.random() * 10) + 20;
            const tto = distance;

            moonObjects.push(
                {
                    index: j,
                    distance,
                    tto,
                }
            );
        }

        planetObjects.push(
            {
                index: i,
                distance,
                tto,
                moonObjects,
            }
        );
    }

    return planetObjects;
};