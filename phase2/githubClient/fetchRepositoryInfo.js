const got = require('got');
const sinatra = 'sinatra/sinatra'

const fetchRepositoryInfo = (response) => {
    const responseObject = JSON.parse(response.body);
    console.log(responseObject);
}


got(sinatra).then(fetchRepositoryInfo);