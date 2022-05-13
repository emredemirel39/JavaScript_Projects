const inputText = document.querySelector('.user-input');
const searchButton = document.querySelector('#search-button');
const locationButton = document.querySelector('#find-location');
const weatherInfo = document.querySelector('.weather-info');
const apiKey = '6653030da6e8e8ca689081d8bbd6f5c8';

window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
    searchFunc();
    enterEvent();
    weatherByLocation();
});

// display weather DOM

function displayWeather(city) {
    
    weatherInfo.innerHTML = '';
    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
    weatherCard.innerHTML = `
            <div class="place-info">
        <h1 class="city">${city.name},</h1>
        <h3 class="country">${city.sys.country}</h3>
    </div>
    <div class="temp-info">
        <img id="weather-icon" src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="">
    <h1 class="temp">${Math.round(city.main.temp)} <sup>o</sup>C</h1>
    </div>
    <div class="desc">
        <h3 class="weather-desc">${city.weather[0].main}</h3>
    </div>
    `
    weatherInfo.appendChild(weatherCard);
};

// geolocation api 

const weatherByLocation = () => {
    locationButton.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(getCurrentLocation);
    });
};

// weather of current location

const getCurrentLocation = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let weatherApiByCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        fetch(weatherApiByCoords)
        .then(response => response.json())
        .then(city => displayWeather(city))
    } catch (err) {
       console.error(err)
    };
};

// search city and get weather

const searchFunc = () => {

    searchButton.addEventListener('click', () => {
        
        const inputCityName = inputText.value;
        const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&appid=${apiKey}&units=metric`
    
        try {
            fetch(weatherApi)
            .then(response => response.json())
            .then(city => displayWeather(city))
        } catch (err) {
            console.error(err);
        }
    
    });
};

// enter event for input

const enterEvent = () => {
    inputText.addEventListener('keyup', (key) => {
        if (key.keyCode === 13) {
            searchButton.click()
        };
    });
};

