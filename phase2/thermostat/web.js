const express = require('express');
const Thermostat = require('./thermostat');
const thermo = new Thermostat();
const app = express();
const port = 3000;

app.get('/temperature', (req, res) => {
    let temperature = JSON.stringify({ temperature: thermo.getTemperature()})
    res.send(temperature)
})

app.post('/up', (req, res) => {
    thermo.up();
    res.send()
})

app.post('/down', (req, res) => {
    thermo.down();
    res.send()
})

app.delete('/temperature', (req, res) => {
    thermo.reset();
    res.send()
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);