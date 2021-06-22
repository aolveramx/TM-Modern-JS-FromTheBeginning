const name = "John";
const age = 30;
const job = "Web developer";
const city = "Miami";
let html;

// Without template strings ES5
html =
  "<ul><li>Name: " + name +
  "</li><li>Age: " + age +
  "</li><li>Job: " + job +
  "</li><li>City: " + city +
  "</li></ul>";

html = "<ul>" +
  "<li>Name: " + name + "</li>" +
  "<li>Age: " + age + "</li>" +
  "<li>Job: " + job + "</li>" +
  "<li>City: " + city + "</li>" +
  "</ul >";

function hello() {
  return 'Hello';
}

// With template strings or called templated literals ES6
html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${2 + 2}</li>
      <li>${hello()}</li>
      <li>${age > 30 ? 'over 30' : 'under 30'}</li>
    </ul>
  `;

document.body.innerHTML = html;