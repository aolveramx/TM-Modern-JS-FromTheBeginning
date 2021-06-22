/*
if(something){
  do something
} else {do something else
} 
*/

const id = 100;

//Equal to

if (id == 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
};

//Not iqual to 

if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
};

//Must times you want to check the value and THE TYPE using ===

//Equal to value and type

if (id === 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
};

//Not equal to value and type

if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
};

//Test if undefined

if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
};

//Greater or less than

if (id <= 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
};

//else if

const color = "Yellow";
if (color === "red") {
  console.log("Color is red");
} else if (color === 'blue') {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
};

//Logical Operator

const name = "steve";
const age = 70;

//and && 

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
};

// or ||

if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for race`);
};

// Ternary opererator
console.log(id === 100 ? "CORRECT" : "INCORRECT");

//Without braces
if (id === 100)
  console.log("Correct");
else
  console.log("Incorrect");
