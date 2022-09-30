class Weather {
    constructor(api) {
        this.api = api;
        this.weatherData = null;
    }

    fetch = (cityName) => {
        this.api.fetchWeatherData(cityName, (data) => {
            this.weatherData = data;
        });
    }

    getWeatherData = () => {
        return this.weatherData;
    }
}

module.exports = Weather;