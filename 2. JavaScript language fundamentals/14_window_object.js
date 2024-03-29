//Window Methods, Objects and Properties

//Alert
window.alert("Hello World");

//Prompt
const input = prompt();
alert(input);

//Confirm

if (confirm("Are you sure")) {
  console.log("Yes");
} else {
  console.log("No");
};

let val;

//Otter height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll points for scroll bar
val = window.scrollY;
val = window.scrollX;

//Locations Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
window.location.href = "http://google.com";
//Reload
window.location.reload();

// History Object. Use -1, ... to go back n numbers of pages
val = window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);