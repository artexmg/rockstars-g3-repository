// (c) Enroute 2018
//
//     Prepared by AMG
//
// Arithmetic operators
let op1, opt2, result;
opt1 = 100;
opt2 = 5;
result = opt1 + opt2;
console.log(`Addition: ${opt1}+${opt2}=${result}`);

result = opt1 - opt2;
console.log(`Substraction: ${opt1}-${opt2}=${result}`);

result = opt1 * opt2;
console.log(`Multiplication: ${opt1}*${opt2}=${result}`);

result = opt1 / opt2;
console.log(`Division: ${opt1}/${opt2}=${result}`);

result = opt1 % opt2;
console.log(`Remainder: ${opt1}%${opt2}=${result}`);

// The Math Object
opt1 = 25.43;
opt2 = -34.21;
console.log(`PI = ${Math.PI} | EulerNumber = ${Math.E}`);

console.log(`round of ${opt1} = ${Math.round(opt1)}`);
console.log(`ceil of ${opt1} = ${Math.ceil(opt1)}`);
console.log(`floor of ${opt1} = ${Math.floor(opt1)}`);

console.log(`square root of ${opt2} = ${Math.sqrt(opt1)}`);
console.log(`abs of ${opt2} = ${Math.abs(opt2)}`);
console.log(`power of ${opt1}^5  = ${Math.pow(opt1, 5)}`);

console.log(`min of [-123,4,2,89,10] = ${Math.min(-123, 4, 2, 89, 10)}`);
console.log(`max of [-123,4,2,89,10] = ${Math.max(-123, 4, 2, 89, 10)}`);

// Integer Random
let randomVal = Math.random();
console.log(`Random Value=${randomVal}`);
// from 1 to 99 (Decimals)
randomVal = randomVal * 100;
console.log(`Random Value [1-99] =${randomVal}`);
// from 1 to 100 (Decimals)
randomVal = randomVal + 1;
console.log(`Random Value [1-100] =${randomVal}`);
// from 1 to 100 (Integers)
randomVal = Math.floor(randomVal);
console.log(`Random Value [1-100] =${randomVal}`);
