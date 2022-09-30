const Weather = require('./weather');

describe('Weather', () => {
    it("Should call fetchWeatherData", () => {
        const api = {
            fetchWeatherData: (cityName, callback) => {
                callback({
                    name: cityName,
                    description: "Description",
                });
            },
        };

        const weather = new Weather(api);
        weather.fetch('Bristol');

        const weatherData = weather.getWeatherData();
        expect(weatherData.name).toEqual("Bristol");
        expect(weatherData.description).toEqual("Description");
    });
});