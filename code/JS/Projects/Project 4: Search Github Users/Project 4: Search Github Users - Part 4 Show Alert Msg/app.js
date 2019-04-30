//
// STEP 4
//
//   STEP 4.1 Implement Clear Profile
//   STEP 4.2 Show Alert
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
        // STEP 4.2
        // Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // SETP 4.1
    // Clear Profile
    ui.clearProfile();
  }
});
