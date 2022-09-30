const express = require('express');
const app = express();
const port = 3000;
this.counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/counter', (req, res) => {
    this.counter += 1;
    res.send();
});

app.get('/counter', (req, res) => {
    res.send(`${this.counter}`);
});

app.delete('/counter', (req, res) => {
    this.counter = 0;
    res.send();
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);