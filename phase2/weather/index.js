const apiKey = require('./apiKey');
const city = 'London'
const got = require('got');

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

const weatherData = (response) => {
    const responseObject = JSON.parse(response.body);
    console.log(responseObject);
}


got(apiUrl).then(weatherData);