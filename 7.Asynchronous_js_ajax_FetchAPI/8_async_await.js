// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; //Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  //Await response of the fetch call
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  //Only proceded once its resolved
  const data = await response.json();
  //Only proced once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));