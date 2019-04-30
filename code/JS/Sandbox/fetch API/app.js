document.getElementById("getText").addEventListener("click", getText);
// Event Handler for GetText
function getText(e) {
  fetch("textData.txt")
    .then(function(response) {
      return response.text(); // stream .then .catch
    })
    .then(function(text) {
      //console.log(text);
      document.getElementById("output").innerHTML = `
      <b>Fetch Text</b>: [${text}]
      `;
    })
    .catch(function(error) {
      console.log(new Error("Something Went Wrong"));
    });
}

// Fetch Json File
document.getElementById("getJson").addEventListener("click", getJson);
// Event Handler for JSON Button
function getJson(e) {
  fetch("JSONdata.json")
    .then(function(response) {
      return response.json(); // Stream JSON
    })
    .then(function(data) {
      console.log(data);

      let output = "";
      data.forEach(function(person) {
        output += `<li>${person.name} works for ${person.company}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(error) {
      console.log("something went wrong");
    });
}

// Fetch API for Bitcoin ID = 1
document.getElementById("getAPI").addEventListener("click", getAPI);
// Event Handler for JSON Button
function getAPI(e) {
  fetch("https://api.coinmarketcap.com/v2/ticker/1/") // API for BTC
    .then(function(response) {
      return response.json(); // Stream JSON
    })
    .then(function(coin) {
      console.log(coin.data);
      btc = coin.data;

      output = `
        <li><b> ${btc.name}</b>(${btc.symbol}): Value $${
        btc.quotes.USD.price
      }</li>
        <li>Value Change in 1hr: ${btc.quotes.USD.percent_change_1h}% </li>
      `;
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(error) {
      console.log("something went wrong");
    });
}
