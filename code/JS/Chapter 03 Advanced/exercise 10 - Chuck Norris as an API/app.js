// API URL
urlAPI = "https://api.icndb.com/jokes/random";

// Grab the button
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector("input[type=number]").value;

  const xhr = new XMLHttpRequest();

  url = `${urlAPI}/${number}`;

  xhr.open("GET", url, true);

  //Validates HTTP Response
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(this.responseText);

      //UNCOMMENT TO SHOW JOKES IN WEB PAGE
      let output = "";

      if (response.type === "success") {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li> Something Went Wrong!</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
