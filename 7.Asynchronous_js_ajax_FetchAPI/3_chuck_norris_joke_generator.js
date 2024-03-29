document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        })
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}

/*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
  <title>Chuck Norris Joke Generator</title>
</head>

<body>
  <div class="container">
    <h2>Chuck Norris Joke Generator</h2>
    <form>
      <div>
        <label for="number">Number of jokes</label>
        <input type="number" id="number">
      </div>
      <div>
        <button class="get-jokes">Get Jokes</button>
      </div>
    </form>
    <ul class="jokes"></ul>
  </div>

  <script src="app.js"></script>
</body>

</html>
*/