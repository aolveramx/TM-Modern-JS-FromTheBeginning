//SETS - Store unique values of any type

const set1 = new Set();

//Add values to set. It has to be unique values
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' }) //Reference object not a primirive value
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, 'string']);

// console.log(set1);

//Get count
// console.log(set1.size);

//check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({ name: 'John' }));

// console.log({ name: 'John' } === { name: 'John' }) //It´s pointing a different location in memory

// console.log('hello' === 'hello') //String it´s a primituve value

//Delete from set
// set1.delete(100);

// console.log(set1);

//Iterate through sets

//For..of
// for (let item of set1) { //.keys, .values, entries
//   console.log(item);
// }

//ForEach Loop
// set1.forEach((value) => {
//   console.log(value);
// });

//convert set to array
const setArr = Array.from(set1);
console.log(setArr)

/*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox: Patterns</title>
</head>

<body>
  <h1>JavaScript Sandbox: Patterns</h1>
  <button class="sub-ms">Subscribe to Milliseconds</button>
  <button class="unsub-ms">Unsubscribe from Milliseconds</button>
  <br><br>
  <button class="sub-s">Subscribe to Seconds</button>
  <button class="unsub-s">Unsubscribe from Seconds</button>
  <br><br>
  <button class="fire">Fire event</button>

  <script src="app.js"></script>
</body>

</html>
*/