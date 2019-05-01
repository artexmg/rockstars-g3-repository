// (c) Enroute 2018
//
//     Prepared by AMG
//
// Today
const today = new Date(); // Today by Default
console.log(today);
console.log(typeof today);

// Formatting Dates
const independenceDay = new Date("07-04-1776 11:59:00");
console.log(independenceDay);

const moonLanding = new Date("06-20-1969 20:17");
console.log(moonLanding);

// getMonth is 0-based!!
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getTime());

let birthday = new Date();
birthday.setMonth(8);
birthday.setDate(15);
birthday.setFullYear(1810);
console.log(birthday);
