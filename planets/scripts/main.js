import allPlanets from "../scripts/planets_data.js";    // getting values from object

// create elements from object which will listed on select element 
const list = document.querySelector('#list');
let planetNames
allPlanets.forEach(e => {
    planetNames = document.createElement('option')
    planetNames.value = `${e.gravity} ${e.name}`    // we need two value: first is gravity to calculate mass. second is planet name to we can change planet image
    planetNames.innerHTML = e.name[0].toUpperCase() + e.name.substring(1);
    list.appendChild(planetNames);
});

// getting values from elements in page
const inputMass = document.querySelector('#mass');
const planetImage = document.querySelector('#planet-image');
const descriptionBox = document.querySelector('.description');
const regexNumber = /^[0-9]+$/;

// calculate mass in each planet and define planet images
const buttonCalculateWeight = document.querySelector('#calculate-button')
buttonCalculateWeight.addEventListener('click', () => {
    const arrInfoOfSelectedPlanet = list.value.split(' ');        // we are creating an array through split method to getting values separately 
    const gravityOfSelectedPlanet = arrInfoOfSelectedPlanet[0];   // first value is first element in array: gravity
    const nameOfSelectedPlanet = arrInfoOfSelectedPlanet[1];    // second value is second element in array: planet name

    if (nameOfSelectedPlanet === null || nameOfSelectedPlanet === undefined) {
        descriptionBox.innerHTML = `<h1>You did not choose a planet yet!</h1>`;
        setTimeout(() => {
            descriptionBox.innerHTML = `<h1>Please enter a value in the box above to get started</h1>`;
        }, 5000);
    }
    else if (inputMass.value.match(regexNumber)) {
        planetImage.src = `./images/${nameOfSelectedPlanet}.png`;
        descriptionBox.innerHTML = 
        `<h1>The weight of the object in ${nameOfSelectedPlanet}</h1>
        <h1 class='weight-result'>${(gravityOfSelectedPlanet * inputMass.value).toFixed(2)} kg</h1>`;

    } else if (inputMass.value === null || inputMass.value.length === 0) {
        planetImage.src = `./images/${nameOfSelectedPlanet}.png`;
        descriptionBox.innerHTML = `<h1>Mass is required!</h1>`;
        setTimeout(() => {
            descriptionBox.innerHTML = `<h1>Please enter a value in the box above to get started</h1>`;
        }, 5000);

    } else {
        planetImage.src = `./images/${nameOfSelectedPlanet}.png`;
        descriptionBox.innerHTML = `<h1>Entered value must be a number!</h1>`;
        setTimeout(() => {
            descriptionBox.innerHTML = `<h1>Please enter a value in the box above to get started</h1>`;
        }, 5000);
    };
});