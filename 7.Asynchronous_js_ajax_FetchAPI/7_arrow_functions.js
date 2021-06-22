//Without arrowfunctions

const sayHello = function () {
  console.log('Hello');
}

const sayHello = () => {
  console.log('hello')
}

//One line function does not need braces
const sayHello = () => console.log('Hello');

//One line returns
const sayHello = () => 'Hello';

//Same as above
const sayHello = function () {
  return 'Hello';
}

//Return object
const sayHello = () => ({ msg: 'Hello' });

//Single param does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`);

//Multiple params need parenthesis
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

const users = ['Nathan', 'John', 'William'];

const nameLenghts = users.map(function (name) {
  return name.length;
});

//Shorter
const nameLenghts = users.map((name) => {
  return name.length;
});

//Shortest
const nameLenghts = users.map(name => name.length);

console.log(nameLenghts);