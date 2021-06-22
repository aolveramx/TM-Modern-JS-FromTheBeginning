const user = { email: 'jdoe@gmail.com' };

try {
  //Produce a ReferenceError
  // myfunction();

  //Produce a TypeError
  // null.myfunction();

  //Will produce SyntaxError
  // eval('Hello World');

  //Will produce URIError
  //decodeURIComponent('%');

  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch (e) {
  console.log(`User Error: ${e.message}`);
  // console.log(`${e.name}: ITS NULL!!`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  //Run no matters whats error you have
  console.log('Finally runs regardless of result')
}

console.log('Program continues...');
