const got = require("got");
const apiKey = require('./apiKey');


class WeatherApi {
    fetchWeatherData = (city, callback) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        got(url).then((response) => {
            const data = JSON.parse(response.body);
            callback(data);
        });
    }
}

module.exports = WeatherApi;