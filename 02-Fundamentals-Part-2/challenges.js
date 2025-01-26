console.log(
  "\n\n--------------------------------------------------------------"
);
// First Challenge
console.log("01-Challenge");

const pointsGame1D = 85;
const pointsGame2D = 54;
const pointsGame3D = 41;

const pointsGame1K = 23;
const pointsGame2K = 34;
const pointsGame3K = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (avgDolphins, avgKoalas) {
  let texto = "";
  const doublePointDolphins = avgDolphins * 2;
  const doublePointKoalas = avgKoalas * 2;
  if (avgDolphins >= doublePointKoalas) {
    texto = `Dolphis win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= doublePointDolphins) {
    texto = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    texto = "No team wins...";
  }
  return texto;
};

const scoreDolphins = calcAverage(pointsGame1D, pointsGame2D, pointsGame3D);
const scoreKoalas = calcAverage(pointsGame1K, pointsGame2K, pointsGame3K);
console.log(checkWinner(scoreDolphins, scoreKoalas));

console.log(
  "\n\n--------------------------------------------------------------"
);
// Second Challenge
console.log("02-Challenge");

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];

console.log(tips);
console.log(total);

console.log(
  "\n\n--------------------------------------------------------------"
);
// Third Challenge
console.log("03-Challenge");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = Math.round((this.mass / (this.height * this.height)) * 10) / 10;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`
  );
} else {
  console.log(
    `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`
  );
}

console.log(
  "\n\n--------------------------------------------------------------"
);
// Fourth Challenge
console.log("04-Challenge");

const calcTipp = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverageArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];

for (let i = 0; i < billss.length; i++) {
  tipss.push(calcTipp(billss[i]));
  totals.push(tipss[i] + billss[i]);
}

console.log(`tips: ${tipss}`);
console.log(`totals: ${totals}`);
console.log(`Average: ${calcAverageArray(totals)}`);
console.log(calcAverageArray([2, 3, 7]));
