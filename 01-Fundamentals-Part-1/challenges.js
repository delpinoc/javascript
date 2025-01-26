console.log(
  "\n\n--------------------------------------------------------------"
);
// First Challenge
console.log("01-Challenge");
const massMark = 78;
const heightMark = 1.69;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

console.log(
  "\n\n--------------------------------------------------------------"
);
// Second Challenge
console.log("02-Challenge");
let nameWin, nameLose;
if (BMIMark > BMIJohn) {
  nameWin = "Mark";
  nameLose = "John";
} else {
  nameWin = "John";
  nameLose = "Mark";
}

const outputMessage = `${nameWin}'s BMI is higher than ${nameLose}'s!`;
console.log(outputMessage);

console.log(
  "\n\n--------------------------------------------------------------"
);
// Third Challenge
console.log("03-Challenge");
const numberOfGames = 3;
const minScore = 100;

const scoreGame1Dolphins = 97;
const scoreGame2Dolphins = 112;
const scoreGame3Dolphins = 80;

const scoreGame1Koalas = 109;
const scoreGame2Koalas = 95;
const scoreGame3Koalas = 50;

const scoreDolphins =
  (scoreGame1Dolphins + scoreGame2Dolphins + scoreGame3Dolphins) /
  numberOfGames;
const scoreKoalas =
  (scoreGame1Koalas + scoreGame2Koalas + scoreGame3Koalas) / numberOfGames;

console.log(`Dolphins' score: ${scoreDolphins}\nKoalas' score: ${scoreKoalas}`);

if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= minScore &&
  scoreKoalas >= minScore
) {
  console.log("Both win the trophy");
} else if (scoreDolphins >= minScore || scoreKoalas >= minScore) {
  if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
  } else {
    console.log("Koalas win the trophy");
  }
} else {
  console.log(`Minimun score is not ${minScore}\nNo one wins the trophy`);
}

console.log(
  "\n\n--------------------------------------------------------------"
);
// Fourth Challenge
console.log("04-Challenge");

const bill = 275;
const percentage = bill >= 50 && bill <= 300 ? 15 : 20;
const tip = (bill * percentage) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
