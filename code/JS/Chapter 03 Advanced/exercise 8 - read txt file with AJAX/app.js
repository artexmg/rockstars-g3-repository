// Create Event Listener to the button
document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN METHOD
  xhr.open("GET", "data.txt", true);

  ////  FOR LATER in the exercise
  // For Spinners/loaders
  xhr.onprogress = function() {
    console.log("ReadyState", xhr.readyState);
  };

  // VALIDATE THERE ARE NO HTTP ERRORS
  // AND THEN PROCESSES DATA INPUT!
  xhr.onload = function() {
    if (this.status === 200) {
      //console.log(this.responseText);

      document.getElementById("output").innerHTML = `<h1>${
        this.responseText
      }</h1>`;
    }
  };

  //   // //FOR LATER in the exercise
  xhr.onreadystatechange = function() {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  };

  //// FOR LATER in the exercise
  xhr.onerror = function() {
    console.log("Request error...");
  };

  xhr.send();
}
