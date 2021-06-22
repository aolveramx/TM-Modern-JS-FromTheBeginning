document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

//Get local text file data
function getText() {
  fetch('text.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

//Get local json data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.tittle}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

//Get from external API
function getExternal() {
  fetch('https://api.github.com/users').then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

/*

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
  <title>Fetch API Sandbox</title>
</head>

<body>
  <div class="container">
    <h1>Fetch API Sandbox</h1>
    <button id="button1">Get Text</button>
    <button id="button2">Get JSON</button>
    <button id="button3">Get API Data</button>
    <br><br>
    <div id="output"></div>
  </div>
  <script src="app.js"></script>
</body>

</html>

text.txt
This is a Sample Text File


posts.json
[
  {
    "tittle": "Post One",
    "body": "This is post one"
  },
  {
    "tittle": "Post two",
    "body": "This is post two"
  },
  {
    "tittle": "Post three",
    "body": "This is post three"
  }
]


*/