/*let js = 'amazing';
console.log(40 + 50 + 10)

console.log('Jonas');
console.log(23);

let firstName = "Jorge Martin Del Pino Contreras";
console.log(firstName);

let myFirstJob = "Programmer";

console.log("Hello every one, my name is " + firstName + " and I work as a " + myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jorge");

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 26;
age = 27;

const birthYear = 1997;
birthYear = 1998;


var job = "programmer";
console.log(job);
job = "teacher";
console.log(job);

lastName = "Del pino"; // esto no esta permitido, ya que no se ha definido el
// tipo de variable.
console.log(language);


// Math operators
const currentAge = 2024;
const ageJonas = currentAge - 1997;
const ageSarah = currentAge - 2000;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, ageJonas ** 2);

// concatenate
const firstName = "Jorge";
const secondName = "Martin";
console.log(firstName + " " + secondName);

// Assignments operators
let x = 10 + 5; // --> 15
x += 10; // x = x + 10 --> 25
x *= 4; // x = x * 4 --> 100
x++; // x = x + 1 --> 101
x--; // x = x - 1 --> 100
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);


const firstName = "Jorge Martin";
const job = "student";
const birthYear = 1997;
const currentYear = 2024;

const jorge =
  "I'm " +
  firstName +
  ", a " +
  job +
  " and i was born in " +
  birthYear +
  " then " +
  "I'm " +
  (currentYear - birthYear) +
  " year old";

console.log(jorge);

const jorgeNew = `I'm ${firstName}, a ${job} and I was born in ${birthYear} then I'm ${
  currentYear - birthYear
} year old!`;
console.log(jorgeNew);

console.log("String with\nmultiple\nlines");
console.log(`String with
multiple
lines`);


const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`The person is old!`);
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft}!`);
}

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`The century is ${century}`);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 2, inputYear + 2);
console.log(Number("Jorge"));
console.log(typeof NaN);
console.log(String(23), 23);
console.log(typeof String(23), typeof 12);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 12);
console.log("23" - "10" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n);

let b = 1 + "1";
console.log(b);
--b;
console.log(b);


// 5 falsy values: 0, "", undefined, null NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jorge"));
console.log(Boolean({}));
console.log(Boolean(""));

let money;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

const age = 18;
if (age === 18) console.log("You are old! ;)");
else console.log("You are young ;(");

const miNumber = Number(prompt("What's your favourite number?"));
console.log(miNumber);
console.log(typeof miNumber);
console.log(typeof Number(miNumber));

if (miNumber === 23) console.log("This number is amazing!");
else if (miNumber === 7) console.log("7 is an amazing number!");
else if (miNumber === 9) console.log("9 is an amazing number!");
else console.log("The number is not 23 or 7!");

if (String(miNumber) != 23) console.log("Why not 23?");


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

let shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) console.log("Sarah is able to drive!");
else console.log("Someone else should drive...");

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) console.log("Sarah is able to drive!");


const day = "wednesday";

console.log("\nUsing switch statement\n");

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

console.log("\nUsing if-else statements\n");

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

const age = 15;
const message = age >= 18 ? "You can drink wine." : "You can't drink wine.";
console.log(message);

let drink2;
if (age >= 18) {
  drink2 = "Wine";
} else {
  drink2 = "Water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

*/
