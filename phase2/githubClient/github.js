class Github {
    constructor(api) {
        this.api = api;
        this.repoData = null;
    }

    fetch = (repoName) => {
        this.api.fetchRepositoryData(repoName, (data) => {
            this.repoData = data;
        });
    }

    getRepoData = () => {
        return this.repoData;
    }
}

module.exports = Github;