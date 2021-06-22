//6-Init GitHub
const github = new Github;

//11-Init UI
const ui = new UI;

//1-Search input
const searchUser = document.getElementById('searchUser');

//2-Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //3-Get input text
  const userText = e.target.value;

  if (userText !== '') {
    //5-Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //7-Show alert user not found
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //8-Show profile
          ui.showProfile(data.profile);
          //14.3-Show repos
          ui.showRepos(data.repos);
        }
      })
  } else {
    //9-Clear profile
    ui.clearProfile();


  }
});