// (c) Enroute 2018
//
//     Prepared by AMG
//

// String Methods

// Concatenation
const firstName = "Javier";
const lastName = "Hernandez";

console.log("Student Legal Name: " + firstName + " " + lastName);
// // Append
let studentFullName = firstName;

console.log("Student Legal Name: " + studentFullName);
studentFullName += " ";
studentFullName += lastName;
console.log("Student Legal Name: " + studentFullName);
// Method concat
console.log("Player name: " + firstName.concat(" ", lastName));
// Escaping
const nickName = "chicharito";
console.log("Player name: " + firstName + " '" + nickName + "' " + lastName);

// Length
const playerName = firstName + " '" + nickName + "' " + lastName;
console.log(
  "string [" + playerName + "] has " + playerName.length + " characters"
);

// To UpperCase
console.log(playerName.toUpperCase());
console.log(playerName.toLowerCase());

// To LowerCase
console.log(playerName.toLowerCase());

//Strings as array
console.log(
  playerName[0] +
    playerName[1] +
    playerName[2] +
    playerName[3] +
    playerName[4] +
    playerName[5]
);
// Search characters
const elQuijote =
  "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.";
let word, indexFirst, indexLast;
console.log(elQuijote);

// // first and last character
word = "los";
// console.log(elQuijote);
indexFirst = elQuijote.indexOf(word);
console.log("'" + word + "' is used first time position " + indexFirst);
// console.log("String[" + indexFirst + "] = " + elQuijote[indexFirst]);

indexLast = elQuijote.lastIndexOf(word);
console.log("'" + word + "' is used last time at position " + indexLast);
console.log("String[" + indexLast + "] = " + elQuijote[indexLast]);

// // character in a given position

start = 371;
end = 380;
console.log(
  "Substring starts " +
    start +
    " ends " +
    end +
    " = [" +
    elQuijote.substring(start, end) +
    "]"
);
