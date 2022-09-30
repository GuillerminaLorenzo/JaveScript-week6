const Github = require('./github');

describe("Github", () => {
    it("Should call fetchRepositoryData", () => {
        const mockApi = {
            fetchRepositoryData: (repoName, callback) => {
                callback({
                    name: repoName,
                    description: "Some fake description",
                });
            },
        };
        
        const github = new Github(mockApi);
        github.fetch("sinatra/sinatra");

        const repoData = github.getRepoData();
        expect(repoData.name).toEqual("sinatra/sinatra");
        expect(repoData.description).toEqual("Some fake description");
    });
});