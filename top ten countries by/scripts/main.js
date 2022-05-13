// ** get all countries via fetch()
const countriesAPI = 'https://restcountries.com/v2/all';

window.addEventListener('DOMContentLoaded', () => {
    getCountriesApi();
    app();
});

const getCountriesApi = async () => {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    app(data);
};

function app(countries) {

    // ** info about number of total countries in subtitle
    const totalNumberOfCountries = countries.length;
    const totalCountries = document.querySelector('#total-countries');
    totalCountries.textContent = totalNumberOfCountries;
    
    
    // ******   calculate population    *********
    
    
    const totalPopulation = countries.reduce((acc, curr) => acc += curr.population, 0);
    const world = {
        name: 'World',
        population: totalPopulation
    };
    
    const sortedCountries = countries.sort((a, b) => ( - a.population) - ( - b.population));
    let first10countriesByPopulation = sortedCountries.filter((e, i) => i < 10);
    first10countriesByPopulation.push(world);
    first10countriesByPopulation = first10countriesByPopulation.sort((a, b) => ( - a.population) - ( - b.population));
    
    // ****** Event Listener 'Click'
    
    const populationButton = document.querySelector('.population');
    populationButton.addEventListener(('click'),  () => {
        document.querySelector('.graph-description').textContent = '10 most populated countries in the world';
        document.querySelector('.graph-wrapper').innerHTML = '';
        document.querySelector('.graph-wrapper').style.display = 'block';
        
        first10countriesByPopulation.forEach((e, i) => {
            let percentOfPopulation = ((e.population / totalPopulation) * 100).toFixed(1); // calculate percent of counries by population
    
            const resultByPopulation = document.createElement('div'); // result div to write results which we found
            resultByPopulation.innerHTML = //html code to add to result div
            `<div class='result-wrapper flex-div'>
                <p class='result-name'>${e.name}</p>
                <div class='percent-bar flex-div'>
                    <div class='percent' percentage = '${percentOfPopulation}%'>${percentOfPopulation}%</div>
                </div>
                <div class='result-value'>${e.population.toLocaleString()} people.</div>
            </div>`;    // we are setting attribute 'percentage' to find percent and use in the "css width"
            
            document.querySelector('.graph-wrapper').appendChild(resultByPopulation);
        });
    
        // setting percent bar
        const getPercent = document.querySelectorAll('.percent');
        getPercent.forEach(e => {
            e.style.width = e.getAttribute('percentage') // or `${e.innerHTML}`
        });
    
        document.querySelector('.percent').textContent = ''; // clear text content of first element of "percent" class. "World"
    });
    
    // *********    END    **********
    
    
    //  ********    calculate most spoken languages    ***********
    
    const totalLanguages = [];
    
    countries.forEach((e) => {
        const arrOfLanguages = e.languages 
        arrOfLanguages.forEach(language => {
            totalLanguages.push(language.name);
        });
    });
    const totalUniqueLanguages = new Set(totalLanguages);
    
    // find to which language how many times exists in array
    
    const countMostSpokenLanguages = [];
    for (const l of totalUniqueLanguages) {
        const filteredLanguages = totalLanguages.filter(lang => lang === l);
        countMostSpokenLanguages.push({language: l, count: filteredLanguages.length});
    };
    countMostSpokenLanguages.sort((a, b) => ( - a.count) - ( - b.count));
    
    const tenMostSpokenLanguage = countMostSpokenLanguages.filter((e, i) => i < 10);
    
    // ***** Event Listener 'Click
    
    const languagesButton = document.querySelector('.languages');
    languagesButton.addEventListener(('click'), () => {
        document.querySelector('.graph-description').textContent = '10 most spoken languages in the world';
        document.querySelector('.graph-wrapper').innerHTML = '';
        document.querySelector('.graph-wrapper').style.display = 'block';
        
        tenMostSpokenLanguage.forEach((e, i) => {
    
            const percentOfUsageOfLanguages = ((e.count / totalLanguages.length) * 100).toFixed(1); //calculate percent of language by its usage
    
            const resultOfMostSpokenLanguages = document.createElement('div'); // result div to write results which we found
            resultOfMostSpokenLanguages.innerHTML =     //html code to add to result div
            `<div class='result-wrapper flex-div'>
                <p class='result-name'>${e.language}</p>
                <div class='percent-bar flex-div'>
                    <div class='percent' percentage = '${percentOfUsageOfLanguages}%'>${percentOfUsageOfLanguages}%</div>
                </div>
                <div class='result-value'>in ${e.count} countries.</div>
            </div>`;
            
            document.querySelector('.graph-wrapper').appendChild(resultOfMostSpokenLanguages);
        });
    
        const getPercent = document.querySelectorAll('.percent');
        getPercent.forEach(e => {
            e.style.width = e.getAttribute('percentage'); // or `${e.innerHTML}`
        });
    });
};



