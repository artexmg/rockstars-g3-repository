// (c) Enroute 2018
//
//     Prepared by AMG
//

//// WINDOW METHODS / OBJECTS / PROPERTIES
window.console.log(123);
window.alert("test");

// //// Prompt
const input = prompt();
console.log(input);

// ////  Confirm
const resultConfirm = confirm("Are you sure?");
if (resultConfirm) {
  console.log("Confirmation = Yes");
} else {
  console.log("Confirmation = No");
}

//// outter height and width
let valW = window.outerWidth;
console.log("outerWidth=" + valW);

let valH = window.outerHeight;
console.log("outerHeight" + valH);

window.outerHeight = 100;
let y = window.scrollY;
let x = window.scrollX;
console.log("Position (x,y) = ", x, y);

//// Location Object
let loc = window.location;
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.href);
console.log(window.location.search);

// Redirect
window.location.href = "http://www.google.com";

// Reload
window.location.reload();

//// History Object
//window.history.go(-2);
let longitud = window.history.length;
console.log(longitud);
//window.history.go();

//// Navigator Object
navigator = window.navigator;

console.log(navigator);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.vendor);
console.log(navigator.language);
