//1-Page State
const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState);
  }

  this.change = function (state) {
    currentState = state;
  }
};

//2-Home State
const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
}

//3-About State
const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is de about page</p>
  `;
};

//4-Contact State
const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <from>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  `;
};

//5-Instantiate page state
const page = new PageState();

//6-Init the first state
page.init();

//7-UI Vars
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

//8-Event Listeners
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});

/*
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">


  <title>JavaScript Sandbox: Patterns</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <a class="navbar-brand" href="#">State Pattern</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a id="home" class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a id="about" class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a id="contact" class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <h1 id="heading"></h1>
    <div id="content"></div>
  </div>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

  <script src="app.js"></script>
</body>

</html>
*/