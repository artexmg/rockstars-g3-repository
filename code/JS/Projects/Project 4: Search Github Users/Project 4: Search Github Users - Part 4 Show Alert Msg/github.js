class GitHub {
  constructor() {
    this.client_id = "e087fa5386597ab5545d"; // From Github OAuth Apps
    this.client_secret = "79081bc7eec716fe3b9156150c193c48f1976522";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return { profile };
  }
}
