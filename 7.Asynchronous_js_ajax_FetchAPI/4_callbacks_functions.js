//1-Simulating Synchronice server

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }


// function getPost() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' });

// getPost();

//2- Simulating Asynchronice server with callbacks

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

/* <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
  <title>Ajax Sandbox</title>
</head>

<body>
  <script src="app.js"></script>
</body>

</html> */