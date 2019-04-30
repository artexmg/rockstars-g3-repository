document.getElementById("getText").addEventListener("click", getText);
// Event Handler for GetText
function getText(e) {
  fetch("textData.txt")
    .then(response => response.text()) // stream .then .catch
    .then(text => {
      document.getElementById("output").innerHTML = `
      <b>Fetch Text</b>: [${text}]
      `;
    })
    .catch(error => "Something Went Wrong");
}

// Fetch Json File
document.getElementById("getJson").addEventListener("click", getJson);
// Event Handler for JSON Button
function getJson(e) {
  fetch("JSONdata.json")
    .then(response => response.json()) // Stream JSON
    .then(data => {
      let output = "";
      data.forEach(function(person) {
        output += `<li>${person.name} works for ${person.company}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => "something went wrong");
}

// Fetch API for Bitcoin ID = 1
document.getElementById("getAPI").addEventListener("click", getAPI);
// Event Handler for JSON Button
function getAPI(e) {
  fetch("https://api.coinmarketcap.com/v2/ticker/1/") // API for BTC
    .then(response => response.json()) // Stream JSON
    .then(coin => {
      btc = coin.data;
      output = `
        <li><b> ${btc.name}</b>(${btc.symbol}): Value $${
        btc.quotes.USD.price
      }</li>
        <li>Value Change in 1hr: ${btc.quotes.USD.percent_change_1h}% </li>
      `;
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => "something went wrong");
}
