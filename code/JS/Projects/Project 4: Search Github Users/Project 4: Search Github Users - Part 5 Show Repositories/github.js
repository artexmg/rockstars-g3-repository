//
//   STEP 5
//        STEP 5.1 Add API for REPOSITORIES!
//        STEP 5.2 FETCH REPOS
//        STEP 5.3 add await condition and return for repos
//

class GitHub {
  constructor() {
    this.client_id = "e087fa5386597ab5545d"; // From Github OAuth Apps
    this.client_secret = "79081bc7eec716fe3b9156150c193c48f1976522";

    // STEP 5.1
    // Add properties to filter repos
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    // STEP 5.2
    // FETCH REPOS
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();

    // STEP 5.3
    // add await condition and return for repos
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
