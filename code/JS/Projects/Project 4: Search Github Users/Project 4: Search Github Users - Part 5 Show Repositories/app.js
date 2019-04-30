//
// STEP 5
//
//   STEP 5.1
//
//

const ui = new UI();

// Instantiate GitHub object
const gitHub = new GitHub();
// Search input
const searchUser = document.getElementById("searchUser");
// Search Input event Listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  // Validates that userText is NOT BLANK!
  if (userText !== "") {
    // Make HTTP CALL
    gitHub.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);

        // STEP 5.1 - show repos
        // Show Repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
