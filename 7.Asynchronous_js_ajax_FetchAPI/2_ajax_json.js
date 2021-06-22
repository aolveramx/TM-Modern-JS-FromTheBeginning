//Load Custumer
document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

//Load Customers

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function (customer) {
        output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}

/* Validate JSON file
https://jsonlint.com


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
  <title>Ajax Sandbox</title>
</head>

<body>
  <div class="container">
    <button id="button1">Get Customer</button>
    <button id="button2">Get Customers</button>
    <br><br>
    <h1>Customer</h1>
    <div id="customer"></div>
    <h1>Customers</h1>
    <div id="customers"></div>
  </div>
  <script src="app.js"></script>
</body>

</html>

custumer.json

{
  "id": 1,
  "name": "John Doe",
  "company": "123 Designs",
  "phone": "444-555-6666"
}

custumers.json

[
  {
    "id": 1,
    "name": "John Doe",
    "company": "123 Designs",
    "phone": "444-555-6666"
  },
  {
    "id": 2,
    "name": "Steve Smith",
    "company": "Hello Productions",
    "phone": "333-222-2222"
  },
  {
    "id": 3,
    "name": "Tara Williams",
    "company": "Traversy Media",
    "phone": "111-222-3333"
  }
]


*/