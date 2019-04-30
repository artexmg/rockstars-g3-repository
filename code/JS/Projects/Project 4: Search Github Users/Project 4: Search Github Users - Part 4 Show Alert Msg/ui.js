//
//  STEP 4 -
//       STEP 4.1 - Clear Profile
//       STEP 4.2 - Show Alert
//       STEP 4.3 - Clear Alert Msg
//

class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display Profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
<div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn 
               btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div col-md-9>
            <span class="badge badge-primary mb-2">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-secondary mb-2">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success mb-2">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-info mb-2">Following: ${
              user.following
            }</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${
                  user.created_at
                }</li>
            </ul>
        </div>
    </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div class="repos"></div>
`;
  }

  // PART 4.1
  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }

  // PART 4.2
  // Show Alert Message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create Div
    const div = document.createElement("div");
    // Add Classes
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get Search Box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);

    // Set timeout after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // STEP 4.3
  // Clear Alert Message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
