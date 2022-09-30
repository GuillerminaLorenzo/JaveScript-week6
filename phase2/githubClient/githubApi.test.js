const GithubApi = require('./githubApi');

describe("Github", () => {
    it("Executes the callback with the received data", (done) => {
        const api = new GithubApi();
        api.fetchRepositoryData("sinatra/sinatra", (response) => {
            expect(response.name).toEqual("sinatra");
            expect(response.full_name).toEqual("sinatra/sinatra");
            done();
        })
    })
})