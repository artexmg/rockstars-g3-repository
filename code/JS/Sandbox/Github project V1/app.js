// Instanciating gitHub object
const gitHub = new GitHub();
// Instatiate UI
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText != "") {
    // Make HTTP CALL to GithAPI
    //console.log(userText);

    gitHub.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show in UI
        //console.log(data);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);

        //console.log(data.repos);
      }
    });
  } else {
    // Clear User Profile
    ui.clearProfile();
  }
});
