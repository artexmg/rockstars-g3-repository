document.getElementById("getText").addEventListener("click", getText);

function getText() {
  fetch("textData.txt")
    .then(function(response) {
      return response.text(); // Body.text() is a STREAM Object and It is a PROMISE!
    })
    // Chained Promise!
    .then(function(data) {
      console.log(data);
      document.getElementById(
        "output"
      ).innerHTML = `<b>Fetch Text: [</b><i>${data}</i><b>]</b>`;
    })
    .catch(function(response) {});
}

document.getElementById("getJson").addEventListener("click", getJson);

function getJson() {
  fetch("JSONdata.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(function(person) {
        output += `<li>${person.name} works for ${person.company}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(error) {
      console.log(error);
    });
}

//document.getElementById("getAPI").addEventListener("click", getAPI);

function getAPI() {
  fetch("https://api.coinmarketcap.com/v2/ticker/1/") // Fetch Data for BitCoin: ID=1
    .then(function(response) {
      return response.json();
    })
    .then(function(coin) {
      btc = coin.data;
      console.log(btc);
      output = `<li> ${btc.symbol} ${btc.name} Value: $${
        btc.quotes.USD.price
      }</li>
                <li> Value Change in 1hr: ${
                  btc.quotes.USD.percent_change_1h
                } %</li>`;
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(error) {
      console.log("ERROR: Something went wrong");
    });
}

document.getElementById("getAPI").addEventListener("click", getMarketCap);

function getMarketCap() {
  fetch("https://api.coinmarketcap.com/v2/listings/")
    .then(function(response) {
      return response.json();
    })
    .then(function(allCoins) {
      allCoins.data.forEach(function(coin) {
        if (coin.symbol === "ETH") {
          coinID = coin.id;

          fetch(`https://api.coinmarketcap.com/v2/ticker/${coinID}/`)
            .then(function(response) {
              //console.log(response);
              return response.json();
            })
            .then(function(coin) {
              console.log(coin.data);
              console.log(coin.data.quotes.USD.price);
              output = `
                <li> ID ${coin.data.id} : ${coin.data.symbol} 
                ${coin.data.name} Rank ${coin.data.rank}</li>
                <li> Coin Value (USD) $${Number(
                  coin.data.quotes.USD.price
                ).toFixed(3)} </li>
                <li> Percentage of change in: 1 Hr: ${
                  coin.data.quotes.USD.percent_change_1h
                }% / 24 Hrs: ${coin.data.quotes.USD.percent_change_24h}%
              `;
              document.getElementById("output").innerHTML = output;
            })
            .catch(function() {});
        }
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}
