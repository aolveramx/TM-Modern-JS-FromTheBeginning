
//4-Login to GitHub Api
class Github {
  constructor() {
    this.client_id = '47a5b74fd0aa6bbce4fc';
    this.client_secret = 'a01be3bd9b95eaa56a0b0ac40f11ddcab0a7a0ad';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //14-Get repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    //14.1-Get repos
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}