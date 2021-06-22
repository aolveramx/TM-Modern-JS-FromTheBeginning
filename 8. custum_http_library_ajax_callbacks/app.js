//3-Instantiate
const http = new easyHTTP;

// //4-Get Posts
// http.get('http://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//6-Get Single Posts
// http.get('http://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//7-Create Data
const data = {
  title: 'Custum Post',
  body: 'This is a custom post'
};

// //8-Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// //10 - Update Post
// http.put('http://jsonplaceholder.typicode.com/posts/5', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//12-Delete Post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});