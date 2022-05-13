// *****    get countries data api via fetch()  ********

const countriesApi = 'https://restcountries.com/v2/all';


async function getCountries () {
    const response = await fetch(countriesApi);
    const data = await response.json();
    showCountries (data);
};
getCountries();

//  *****   display all countries on html page     ******

const countriesList = document.querySelector('.countries-list'); // element where countries will listed on page

function showCountries(countries) {
    //sorting countries by name
    countries.sort((a, b) => {
        if (a.name < b.name) {return - 1};
        if (a.name > b.name) {return 1};
        return 0;
    });

    countries.forEach((e, i) => {

        let countryName = e.name;
        const countryFlag = e.flag;
        const countryCapital = e.capital
        const countryPopulation = e.population;
        const regionOfCountry = e.region;
        const countryArea = e.area
        const languagesArr = e.languages;

        const allLanguages = languagesArr.map((lang) => lang.name);
        const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

        const countryBox = document.createElement('li')
        countryBox.setAttribute('class', 'country-box')
        countryBox.classList.add('grid-div')
        countryBox.innerHTML = 
        `<img class="flag" src='${countryFlag}'>
        <div class="information-box grid-div">
            <h2 class="country-name">${countryName}</h2>
            <p class="capital"><b>Capital:</b> <span class='capital-name'>${countryCapital}</span></p>
            <p class="population"><b>Population:</b> ${countryPopulation.toLocaleString()} people</p>
            <p class='area'><b>Area:</b> ${countryArea} km<sup>2</sup></p>
            <p class="languages"><b>Languages:</b> ${formatter.format(allLanguages)}</p>
            <p class="region"><b>Region:</b> ${regionOfCountry}</p>
        </div>`     
        countriesList.appendChild(countryBox);
    });    
};


//  *****************   SORTING BUTTONS     ***************

// sorting by capital

const sortByCapital = document.querySelector('#sort-capital')
sortByCapital.value = 'not-clicked'
sortByCapital.addEventListener('click', () => {

    //------clear other sort buttons

    const sortByPopulation = document.querySelector('#sort-population')
    sortByPopulation.value = 'not-clicked'
    sortByPopulation.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByPopulation.querySelector('#arrow-population').textContent = '↑';

    const sortByArea = document.querySelector('#sort-area')
    sortByArea.value = 'not-clicked'
    sortByArea.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByArea.querySelector('#arrow-area').textContent = '↑';

    const sortByName = document.querySelector('#sort-name')
    sortByName.value = 'not-clicked'
    sortByName.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByName.querySelector('#arrow-name').textContent = '↑';

    //----------

    let allCountryBoxes = document.querySelectorAll('.country-box');
    let arrOfCountryBoxes = [];
    let countriesList = document.querySelector('.countries-list')
    countriesList.innerHTML = '';

    if (sortByCapital.value === 'not-clicked') {    // button settings to sorting Z to A
        sortByCapital.value = 'clicked'
        sortByCapital.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByCapital.querySelector('#arrow-capital').textContent = '↓';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);      //create new array from all country boxes which are displayed on page
        });

        const sortedCountryBoxesByCapitalZa = arrOfCountryBoxes.sort((a, b) => {    // sorting Z to A
            if(a.querySelector('.capital-name').textContent < b.querySelector('.capital-name').textContent) { return 1; }
            if(a.querySelector('.capital-name').textContent > b.querySelector('.capital-name').textContent) { return - 1; }
            return 0;
        })
        sortedCountryBoxesByCapitalZa.forEach(e => countriesList.appendChild(e));   // display new country boxes which are sorted Z to A


    } else if (sortByCapital.value === 'clicked') {     //button settings to sort A to Z
        sortByCapital.value = 'not-clicked'
        sortByCapital.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByCapital.querySelector('#arrow-capital').textContent = '↑';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);      //create new array from all country boxes which are displayed on page
        });

        const sortedCountryBoxesByCapitalAz = arrOfCountryBoxes.sort((a, b) => {    // sorting A to Z
            if(a.querySelector('.capital-name').textContent < b.querySelector('.capital-name').textContent) { return - 1; }
            if(a.querySelector('.capital-name').textContent > b.querySelector('.capital-name').textContent) { return 1; }
            return 0;
        })
        sortedCountryBoxesByCapitalAz.forEach(e => countriesList.appendChild(e));   // display new country boxes which are sorted A to Z

    };
    
});


// sorting by area

const sortByArea = document.querySelector('#sort-area')
sortByArea.value = 'not-clicked'
sortByArea.addEventListener('click', () => {

    //------clear other sort buttons

    const sortByName = document.querySelector('#sort-name')
    sortByName.value = 'not-clicked'
    sortByName.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByName.querySelector('#arrow-name').textContent = '↑';

    const sortByPopulation = document.querySelector('#sort-population')
    sortByPopulation.value = 'not-clicked'
    sortByPopulation.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByPopulation.querySelector('#arrow-population').textContent = '↑';

    const sortByCapital = document.querySelector('#sort-capital')
    sortByCapital.value = 'not-clicked'
    sortByCapital.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByCapital.querySelector('#arrow-capital').textContent = '↑';

    // ----------------

    let allCountryBoxes = document.querySelectorAll('.country-box');
    let arrOfCountryBoxes = [];
    let countriesList = document.querySelector('.countries-list')
    countriesList.innerHTML = '';

    if (sortByArea.value === 'not-clicked') {   // button settings to sorting min to max
        sortByArea.value = 'clicked'
        sortByArea.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByArea.querySelector('#arrow-area').textContent = '↓';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);      //create new array from all country boxes which are displayed on page
        });

        const sortedCountryBoxesByAreaUp = arrOfCountryBoxes.sort((a, b) => a.querySelector('.area').textContent.match(/\d+/gi).toString().replace(/,/g, '') - b.querySelector('.area').textContent.match(/\d+/gi).toString().replace(/,/g, ''))
        sortedCountryBoxesByAreaUp.forEach(e => countriesList.appendChild(e)); // display new country boxes which are sorted min to max


    } else if (sortByArea.value === 'clicked') {    //  button settings to sort max to min
        sortByArea.value = 'not-clicked'
        sortByArea.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByArea.querySelector('#arrow-area').textContent = '↑';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);      //create new array from all country boxes which are displayed on page
        });

        const sortedCountryBoxesByAreaDown = arrOfCountryBoxes.sort((a, b) => b.querySelector('.area').textContent.match(/\d+/gi).toString().replace(/,/g, '') - a.querySelector('.area').textContent.match(/\d+/gi).toString().replace(/,/g, ''))
        sortedCountryBoxesByAreaDown.forEach(e => countriesList.appendChild(e)); // display new country boxes which are sorted max to min

    };
    
});

// sorting by Name

const sortByName = document.querySelector('#sort-name')
sortByName.value = 'not-clicked'
sortByName.addEventListener('click', () => {

    // clear other sort buttons

    const sortByPopulation = document.querySelector('#sort-population')
    sortByPopulation.value = 'not-clicked'
    sortByPopulation.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByPopulation.querySelector('#arrow-population').textContent = '↑';

    const sortByArea = document.querySelector('#sort-area')
    sortByArea.value = 'not-clicked'
    sortByArea.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByArea.querySelector('#arrow-area').textContent = '↑';

    const sortByCapital = document.querySelector('#sort-capital')
    sortByCapital.value = 'not-clicked'
    sortByCapital.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByCapital.querySelector('#arrow-capital').textContent = '↑';

    let allCountryBoxes = document.querySelectorAll('.country-box');
    let arrOfCountryBoxes = [];
    let countriesList = document.querySelector('.countries-list')
    countriesList.innerHTML = '';

    if (sortByName.value === 'not-clicked') {   // buttons settings to sort z to a
        sortByName.value = 'clicked'
        sortByName.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByName.querySelector('#arrow-name').textContent = '↓';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);  //create new array from all country boxes which are displayed on page
        });

        const sortedCountryBoxesByNameZa = arrOfCountryBoxes.sort((a, b) => {
            if(a.querySelector('.country-name').textContent < b.querySelector('.country-name').textContent) { return 1; }
            if(a.querySelector('.country-name').textContent > b.querySelector('.country-name').textContent) { return - 1; }
            return 0;
        })
        sortedCountryBoxesByNameZa.forEach(e => countriesList.appendChild(e));  // display new country boxes which are sorted z to a


    } else if (sortByName.value === 'clicked') {     // buttons settings to sort a to z
        sortByName.value = 'not-clicked'
        sortByName.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByName.querySelector('#arrow-name').textContent = '↑';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);      //create new array from all country boxes which are displayed on page
        });

        const sortedCountryBoxesByNameAz = arrOfCountryBoxes.sort((a, b) => {
            if(a.querySelector('.country-name').textContent < b.querySelector('.country-name').textContent) { return - 1; }
            if(a.querySelector('.country-name').textContent > b.querySelector('.country-name').textContent) { return 1; }
            return 0;
        })
        sortedCountryBoxesByNameAz.forEach(e => countriesList.appendChild(e));      // display new country boxes which are sorted z to a

    };
    
});

// sorting by Population

const sortByPopulation = document.querySelector('#sort-population')
sortByPopulation.value = 'not-clicked'
sortByPopulation.addEventListener('click', () => {

    // -------- clear other sort buttons

    const sortByName = document.querySelector('#sort-name')
    sortByName.value = 'not-clicked'
    sortByName.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByName.querySelector('#arrow-name').textContent = '↑';

    const sortByArea = document.querySelector('#sort-area')
    sortByArea.value = 'not-clicked'
    sortByArea.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByArea.querySelector('#arrow-area').textContent = '↑';

    const sortByCapital = document.querySelector('#sort-capital')
    sortByCapital.value = 'not-clicked'
    sortByCapital.style.backgroundColor = 'rgb(120, 45, 190)'
    sortByCapital.querySelector('#arrow-capital').textContent = '↑';
    
    // ------------

    let allCountryBoxes = document.querySelectorAll('.country-box');
    let arrOfCountryBoxes = [];
    let countriesList = document.querySelector('.countries-list')
    countriesList.innerHTML = '';

    if (sortByPopulation.value === 'not-clicked') {     // buttons settings to sort min to max
        sortByPopulation.value = 'clicked'
        sortByPopulation.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByPopulation.querySelector('#arrow-population').textContent = '↓';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);      //create new array from all country boxes which are displayed on page
        });
        
        const sortedCountryBoxesByPopulationUp = arrOfCountryBoxes.sort((a, b) => a.querySelector('.population').textContent.match(/\d+/gi).toString().replace(/,/g, '') - b.querySelector('.population').textContent.match(/\d+/gi).toString().replace(/,/g, ''))
        sortedCountryBoxesByPopulationUp.forEach(e => countriesList.appendChild(e));    // display new country boxes which are sorted min to max

    } else if (sortByPopulation.value === 'clicked') {   // buttons settings to sort max to min
        sortByPopulation.value = 'not-clicked'
        sortByPopulation.style.backgroundColor = 'rgb(59, 13, 103)'
        sortByPopulation.querySelector('#arrow-population').textContent = '↑';

        allCountryBoxes.forEach((e) => {
            arrOfCountryBoxes.push(e);      //create new array from all country boxes which are displayed on page
        });

        const sortedCountryBoxesByPopulationDown = arrOfCountryBoxes.sort((a, b) => b.querySelector('.population').textContent.match(/\d+/gi).toString().replace(/,/g, '') - a.querySelector('.population').textContent.match(/\d+/gi).toString().replace(/,/g, ''))
        sortedCountryBoxesByPopulationDown.forEach(e => countriesList.appendChild(e));  // display new country boxes which are sorted min to max

    };
    
});

//  **************      END     ***********


//  *******     SEARCH BY BUTTONS SETTINGS   **********

const buttonSearchAny = document.querySelector('#search-with-any-word')
buttonSearchAny.value = 'not-clicked';

const buttonSearchStartingLetter = document.querySelector('#search-by-starting-letter')
buttonSearchStartingLetter.value = 'not-clicked';

buttonSearchAny.addEventListener('click', () => {       // search any word button settings
    if (buttonSearchAny.value === 'not-clicked') {
        buttonSearchAny.value = 'clicked'
        buttonSearchAny.style.backgroundColor = 'rgb(59, 13, 103)';
        buttonSearchStartingLetter.disabled = true;     // if this button clicked, search starting letter button disabled
    } else if (buttonSearchAny.value === 'clicked') {
        buttonSearchAny.value = 'not-clicked'
        buttonSearchAny.style.backgroundColor = 'rgb(120, 45, 190)';
        buttonSearchStartingLetter.disabled = false;    // if this button not clicked, search starting letter button not disabled
    };
});

buttonSearchStartingLetter.addEventListener('click', () => {    // search starting letter button settings
    if (buttonSearchStartingLetter.value === 'not-clicked') {
        buttonSearchStartingLetter.value = 'clicked'
        buttonSearchStartingLetter.style.backgroundColor = 'rgb(59, 13, 103)';
        buttonSearchAny.disabled = true;             // if this button clicked, search any word button disabled
    } else if (buttonSearchStartingLetter.value === 'clicked') {
        buttonSearchStartingLetter.value = 'not-clicked'
        buttonSearchStartingLetter.style.backgroundColor = 'rgb(120, 45, 190)';
        buttonSearchAny.disabled = false;    // if this button not clicked, search any word button not disabled
    };
});

//   **********     END     *********


//  *********   SEARCH INPUT SETTINGS     *********


let countryName = document.querySelector('.country-name');
const input = document.querySelector('#search')
input.addEventListener('input', () => {

    let inputValue = input.value;
    let regExpFlag = 'gi';
    const regExpInput = new RegExp(inputValue, regExpFlag);

    const countryName = document.querySelectorAll('.country-name')
    countryName.forEach((e) => {
        e.closest('.country-box').style.display = 'grid';

        if (buttonSearchAny.value === 'clicked') {
            ! e.textContent.match(regExpInput)
            ? e.closest('.country-box').style.display = 'none'
            : e.closest('.country-box').style.display = 'grid';     
        } else if (buttonSearchStartingLetter.value === 'clicked') {
            ! e.textContent.toLowerCase().startsWith(inputValue.toLowerCase())
            ? e.closest('.country-box').style.display = 'none'
            : e.closest('.country-box').style.display = 'grid';     
        } else {
            ! e.textContent.match(regExpInput)
            ? e.closest('.country-box').style.display = 'none'
            : e.closest('.country-box').style.display = 'grid';
        };
    });
});

//  ********    END     *************