"use strict";
console.log(
  "\n\n--------------------------------------------------------------"
);
// First Challenge
console.log("01-Challenge"); /*

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

// console.table(test1);
// console.table(test2);

const printForeCast = function (temps) {
  let temperaturesString = '"';
  for (let position = 0; position < temps.length; position++) {
    const currentTemp = temps[position];
    const template = `... ${currentTemp}ºC in ${position + 1} days `;
    temperaturesString += template;
    if (position == temps.length - 1) {
      temperaturesString += '..."';
    }
  }
  return temperaturesString;
};

console.log(printForeCast(test1));
console.log(printForeCast(test2));
