let re;
// Liteal Characters
re = /hello/;
re = /hello/i;

//Metacharacters Symbols
re = /^h/i;    // Must start with
re = /d$/i;    // Must ends with
re = /world$/i;    // you can use a word
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character. ? after optional character
re = /gre?a?y\?/i; // Escape character

//Brackets [] - Character Sets
re = /gr[ae]y/i;    //Must be an a or e. Better solution than scape char
re = /[GF]ray/i;    //Must be a G or F
re = /[^GF]ray/i;    //Match anything except a G or F
re = /^[GF]ray/i;    //Must begin with G or F
re = /[A-Z]ray/;    //Match anything uppercase letter
re = /[a-z]ray/;    //Match anything lowercase letter
re = /[A-Za-z]ray/;    //Match anything letter
re = /[0-9]ray/;    //Match anything digit
re = /[0-9][0-9]ray/;    //Match anything digit

//Bracers {} - Quantifiers
re = /Hel{2}o/i;    //Must occur exactly {n} amount of times
re = /Hel{2,4}o/i;    //Must occur between that range {n, n}amount of times
re = /Hel{2,}o/i;    //Must occur at least {n} amount of times

//Paretheses () - Grouping
re = /([0-9]x){3}/ //Must occur at least 3x three times
re = /^([0-9]x){3}$/ //Must occur exactly 3x three times

//Shorthand Character Classes
re = /\w/;    //Word character - alphanumeric or _
re = /\w+/;    //One ore more word characters
re = /\W/;    //None word characters
re = /\d/;     //Match any digit
re = /\d+/;     //Match any digit 0 or more times
re = /\D/;     //Match any Non-difits
re = /\s/;     //Match withespace (space or tab) character
re = /\S/;     //Match non-withespace (space or tab) character
re = /Hell\b/;  //Word boundary

//Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if NOT followed by y


// String to match
const str = 'Hxyello, welcome to Hell';


//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);