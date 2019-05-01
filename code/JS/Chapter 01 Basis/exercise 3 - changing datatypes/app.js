// (c) Enroute 2018
//
//     Prepared by AMG
//
console.log("Hello World!");
// Number to String
let numberVariable5 = 5;
let numberVariable2 = 22;
console.log(typeof numberVariable5);
console.log("variable5 length = " + numberVariable5.length);

// Object wrapper for Primitives
console.log("variable5 length = " + numberVariable5.length);

// Convert to String using toString() <-- object wrapper
numberVariable5 = numberVariable5.toString();
console.log("variable5 type =" + typeof numberVariable5);

// Convert to String using String()
numberVariable2 = String(numberVariable2);
console.log("variable2 " + typeof numberVariable2);

// Convert array to String
let arrayVariable = [1, 2, 3, 4, 5];
console.log("type of array = " + typeof arrayVariable);
arrayVariable = arrayVariable.toString();
console.log("type of array = " + typeof arrayVariable);

// Convert date to String
let dateVariable = new Date();
console.log(dateVariable + " is an " + typeof dateVariable);
dateVariable = dateVariable.toString();
console.log(dateVariable + " is a " + typeof dateVariable);

// String to Number
numberVariable5 = Number(numberVariable5);
console.log("variable5 type =" + typeof numberVariable5);
console.log("to fix for variable5 =" + numberVariable5.toFixed(2));

// Boolean to number (?)
booleanVariableTrue = Number(true);
booleanVariableFalse = Number(false);

console.log(`Boolean to Number (true) =+${booleanVariableTrue}`);
console.log(`Boolean to Number (false) =+${booleanVariableFalse}`);

// Integer vs Decimal
decimalVar = parseInt("392.45");
floatVar = parseFloat("392.45");
console.log("Decimal " + decimalVar + " Float " + floatVar);
sum = floatVar + decimalVar;
console.log(sum + " " + typeof sum);

// What??
one = "1";
two = "2";
console.log("one + one =" + one + two + " why??");
console.log("paresInt(Hello World)=" + parseInt("Hello World") + " what??");
