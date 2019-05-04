////******************************/
////    (c) Enroute 2018
////
////     Prepared by AMG
////******************************/
a = 1;
let b = 2;
const c = 3;

console.log(`Global Scope   a=${a} b=${b} and c=${c}`);

function voidFunct(a) {
  a = 101;
  let b = 102;
  const c = 103;
  console.log(`Function Scope a=${a} b=${b} and c=${c}`);
}

voidFunct();

if (true) {
  a = 101;
  let b = 102;
  const c = 103;
  console.log(`Block Scope  a=${a} b=${b} and c=${c}`);
}

console.log(`Global Scope   a=${a} b=${b} and c=${c}`);

console.log("LOOP - Start");
for (a = 0; a <= 10; a++) {
  //console.log(`Loop: a=${a}`);
  console.log(`    Block Scope  a=${a} b=${b} and c=${c}`);
}
console.log("LOOP - End");

console.log(`Global Scope a=${a} b=${b} and c=${c}`);
