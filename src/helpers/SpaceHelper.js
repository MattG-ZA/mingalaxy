export const createSolarSystem = () => {
    // Random size between 50 & 100
    const starSize = Math.ceil(Math.random() * 50) + 50;

    // Generate 2 to 7 planets
    const numberOfPlanets = Math.ceil(Math.random() * 6) + 1;
    const planetObjects = [];

    for (let i = 0; i < numberOfPlanets; i++) {
        // Random size between 5 & 25
        const planetSize = Math.ceil(Math.random() * 20) + 5;

        // This is to ensure planets are in the correct order from the star
        let distance = (i * 100) + Math.ceil(Math.random() * 100) + starSize;
        distance = i === 0 ? distance : calculateDistance(distance, planetObjects[i - 1], 'planet');

        // Setting the TTO to the distance is a nice hack to make further planets orbit slower
        const tto = distance;

        // Generate 0 to 2 moons
        const numberOfMoons = Math.floor(Math.random() * 3);
        const moonObjects = [];

        for (let j = 0; j < numberOfMoons; j++) {
            // Random size between 2 & 4
            const moonSize = Math.ceil(Math.random() * 3) + 1;

            let distance = (j * 10) + Math.ceil(Math.random() * 10) + planetSize;
            distance = j === 0 ? distance : calculateDistance(distance, moonObjects[j - 1], 'moon');

            const tto = distance;

            moonObjects.push(
                {
                    index: j,
                    moonSize,
                    distance,
                    tto,
                }
            );
        }

        planetObjects.push(
            {
                index: i,
                planetSize,
                distance,
                tto,
                moonObjects,
            }
        );
    }

    return {
        starSize,
        planetObjects
    };
};

const calculateDistance = (distance, prevObject, type) => {
    // This is to ensure bodies don't overlap
    let calculatedDistance = Math.ceil(distance + (prevObject.distance * 0.3) + prevObject[type + 'Size']);

    // This is to ensure the planets moons don't overlap with another planets moons
    if (type === 'planet') {
        if (prevObject.moonObjects.length > 0) {
            const moonObjects = prevObject.moonObjects;
            calculatedDistance += moonObjects[moonObjects.length - 1].distance;
        }
    }
    
    return calculatedDistance;
};