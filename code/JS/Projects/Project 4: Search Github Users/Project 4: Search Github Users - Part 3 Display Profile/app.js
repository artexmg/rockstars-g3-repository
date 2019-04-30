//
// STEP 3
//
//  PART 3.1 Intialize UI object (line 9)
//  PART 3.2 Show User in UI (line 27)
//
//

// STEP 3.1
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
        // Show Alert - in a Next Lesson
      } else {
        // STEP 3.2
        // Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile - in a Next Lesson!
  }
});
