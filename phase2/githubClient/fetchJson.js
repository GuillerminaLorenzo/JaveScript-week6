const got = require('got');


const fetchJson = (response) => {
    const responseObject = JSON.parse(response.body);
    console.log(responseObject);
}

const url = 'https://jsonplaceholder.typicode.com/todos'


got(url).then(fetchJson);