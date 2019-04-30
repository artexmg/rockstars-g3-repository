// Start
const gitHub = new GitHub();
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  //  Search input
  const userText = e.target.value;

  // Validates when userText is blank
  if (userText !== "") {
    // Make HTTP Call
    gitHub
      .getUser(userText)
      .then(response => {
        if (response.profile.message === "Not Found") {
          // ALERT un UI
        } else {
          // Show User Profile
          ui.showProfile(response.profile);
          console.log(response.profile);
        }

        console.log(response.profile.message);
      })
      .catch(error => console.log(error));
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
