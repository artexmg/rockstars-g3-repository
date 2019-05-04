document.getElementById("button1").addEventListener("click", loadCustomer);

// Load Single Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      //
      // console.log(this.responseText)
      //

      const customer = JSON.parse(this.responseText);

      const output = `
            <ul>
                <li> ID: ${customer.id} </li>
                <li> Name: ${customer.name}</li>
                <li> Company: ${customer.company}</li>
                <li> Phone: ${customer.phone}</li>
            </ul>
            `;
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

// //
// // SECOND PART OF THE EXERCISE --
// //

//*
document.getElementById("button2").addEventListener("click", loadListOfClients);
function loadListOfClients(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "listOfCustomers.json", true);
  xhr.onload = function() {
    if (this.status === 200) {
      let listOfcustomers = JSON.parse(this.responseText);
      let output = "";
      listOfcustomers.forEach(function(customer) {
        output += `
                    <ul>
                        <li> ID: ${customer.id} </li>
                        <li> Name: ${customer.name}</li>
                        <li> Company: ${customer.company}</li>
                        <li> Phone: ${customer.phone}</li>
                    </ul>
                    `;
        document.getElementById("list-of-customers").innerHTML = output;
      });
    }
  };
  xhr.send();
}

//*/
