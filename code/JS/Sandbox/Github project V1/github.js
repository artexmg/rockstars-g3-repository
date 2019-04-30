class GitHub {
  constructor() {
    this.client_id = "e087fa5386597ab5545d";
    this.client_secret = "79081bc7eec716fe3b9156150c193c48f1976522";

    // Add properties to filter repositories
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  // FETCH for Repositories
  async getUser(user) {
    let urlProfile = `https://api.github.com/users/${user}?client_id=${
      this.client_id
    }&client_secret=${this.client_secret}`;

    let urlRepos = `https://api.github.com/users/${user}/repos?per_page=${
      this.respos_count
    }&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${
      this.client_secret
    }`;

    const profileResponse = await fetch(urlProfile);

    const repoResponse = await fetch(urlRepos);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return { profile, repos };
  }

  // GitHub Class End
}
