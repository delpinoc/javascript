"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

function logger() {
  console.log("My name is Jorge");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");



// Function declaration
function calcAge1(birthYear) {
  const currentYear = 2024;
  const age = currentYear - birthYear;
  return age;
}

const age1 = calcAge1(1997);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1997);
console.log(age2);


// Arrow function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(1997);
  const retirement = 65;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1997, "Jorge Martin"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(s2, 3));


const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement > 0 ? retirement : -1;
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1950, "Jorge"));



const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jorge";
console.log(friends);

const firstName = "Jorge Martin";
const jorge = [
  firstName,
  "Del Pino Contreras",
  2024 - 1997,
  "student",
  friends,
];
console.log(jorge);
console.log(jorge.length);

// Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


const friends = ["Michael", "Steven", "Peter"];

// Add elements
// add one element at the end of the array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// add one element at the beginning of the array
friends.unshift("Jorge");
console.log(friends);

// Remove elements
// remove the last elements of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);
console.log(friends.pop());
console.log(friends);

// remove the first element of the array
console.log(friends.shift());
console.log(friends);

console.log(friends.indexOf("Steven")); // return the position of the element in the array

console.log(friends.includes("Steven")); // return true if the elements is in the array and false if not.

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("that person dont exist in this list");
}


const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you wnat to know about Jonas? Choose between firstName, lastName, age, job, and friends."
);
console.log(interestedIn);
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

jonas.location = "Portugal";
jonas["Twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`
);
*/

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));
// console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

*/

/*
console.log("-- hecho a mano --");
console.log("levantamiento de pesas número 1");
console.log("levantamiento de pesas número 2");
console.log("levantamiento de pesas número 3");
console.log("levantamiento de pesas número 4");

console.log("\n-- hecho con un for --");
for (let rep = 1; rep <= 10; rep++) {
  console.log(`levantamiento de pesas número ${rep}`);
}
*/

/*
const jorgeArray = [
  "Jorge",
  "Del Pino",
  2024 - 1997,
  "student",
  ["Adrian", "Aleri", "Hodei"],
];

for (let i = 0; i < jorgeArray.length; i++) {
  console.log(jorgeArray[i], typeof jorgeArray[i]);
}
*/

/*
const years = [1991, 2007, 1969, 2020, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

// continue and break
const jorgeArray = [
  "Jorge",
  "Del Pino",
  2024 - 1997,
  "student",
  ["Adrian", "Aleri", "Hodei"],
];

console.log("\n--- ONLY STRINGS ---");
for (let i = 0; i < jorgeArray.length; i++) {
  if (typeof jorgeArray[i] !== "string") {
    continue; // continue sirve para saltar el codigo que viene despues de
    // de ejecutar "continue" e ir al principio del bucle
    // pero yendo a la posición siguiente.
  }
  console.log(jorgeArray[i], typeof jorgeArray[i]);
}

console.log("\n--- BREAK WITH NUMBER ---");
for (let i = 0; i < jorgeArray.length; i++) {
  if (typeof jorgeArray[i] === "number") {
    break; // break sirve para romper el bucle completamente
    // es decir que cuando se ejecute esta linea, todo lo que venga despues
    // del break, ya no se ejecutara. por eso al ejecutarse esto,
    // el console.log que hay despues ya no se ejecuta. y sale del bucle
    // devolviendo el flujo al método principal.
  }
  console.log(jorgeArray[i], typeof jorgeArray[i]);
}
*/

/*
let rep = 1;
while (rep <= 10) {
  console.log(`Ejercicio número ${rep}`);
  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
  */
