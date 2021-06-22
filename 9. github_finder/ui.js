//10-Create UI
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  //Display Profile in UI
  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div> 
      <h3 class="page-heading mb-3">Latest Repost</h3>
      <div id="repos"></div> 
      `;
  }

  //14.5 Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
      <div class="card card-body mb-2>
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
      `;
    });

    //15-Output repos
    document.getElementById('repos').innerHTML = output;
  }


  //8.1-Show Alert Message
  showAlert(message, className) {
    //12.1-Clear any remaining alerts
    this.clearAlert();
    //8.2-Create div
    const div = document.createElement('div');
    //8.3-Add classes
    div.className = className;
    //8.4-Add text
    div.appendChild(document.createTextNode(message));
    //8.5-Get parent
    const container = document.querySelector('.searchContainer');
    //8.6-Get search box
    const search = document.querySelector('.search');
    //8.7-Insert alert
    container.insertBefore(div, search);

    //13-Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //12-Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }

  }

  //9.1-Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}