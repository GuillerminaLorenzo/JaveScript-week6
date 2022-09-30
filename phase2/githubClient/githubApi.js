const got = require("got");

class GithubApi {
    fetchRepositoryData = (repoName, callback) => {
        const url = "https://api.github.com/repos/" + repoName;
        got(url).then((response) => {
            const data = JSON.parse(response.body);
            callback(data);
        });
    }
}

module.exports = GithubApi;