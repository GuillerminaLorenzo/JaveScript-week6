const WeatherApi = require('./weatherApi');

describe('WeatherApi', () => {
    it("Executes the callback with the received data", (done) => {
        const api = new WeatherApi();
        api.fetchWeatherData('London', (response) => {
            expect(response.name).toEqual("London");
            done();
          });
    });
});