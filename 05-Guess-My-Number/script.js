'use strict';
/*
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');

number.textContent = 10;
score.textContent = 23;
highscore.textContent = 22;
message.textContent = '🎉 Correct Number!';

guess.value = 33;
console.log(guess.value);
*/

// Access to the DOM
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const displayScore = document.querySelector('.score');
const displayHighscore = document.querySelector('.highscore');
const domBody = document.querySelector('body');
const domGuess = document.querySelector('.guess');

// Data for the logic of the game
const startMessage = 'Start guessing...';
const startNumber = '?';
const lowMessage = '📉 Too Low!';
const highMessage = '📈 Too High!';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let isGameActive = true;

console.log(randomNumber);

// logic of the game
const checkNumber = function () {
  if (!isGameActive) return; // verificación de que el juego este inactivo

  const proposedNumber = Number(domGuess.value);
  // console.log(proposedNumber);

  if (!proposedNumber) {
    message.textContent = '⛔ Not number!';
  } else if (proposedNumber === randomNumber) {
    message.textContent = '🎉 Correct Number!';
    number.textContent = randomNumber;
    number.style.width = '30rem';
    domBody.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      displayHighscore.textContent = highscore;
    }

    isGameActive = false;
    btnCheck.removeEventListener('click', checkNumber);
  } else if (proposedNumber > randomNumber) {
    score = updateGameState(highMessage, score);
  } else if (proposedNumber < randomNumber) {
    score = updateGameState(lowMessage, score);
  }

  if (score === 0) {
    domBody.style.backgroundColor = '#BA4949';
    btnCheck.removeEventListener('click', checkNumber);
  }

  displayScore.textContent = score;
};

const updateGameState = function (messageText, currentScore) {
  currentScore = updateScore(currentScore);
  updateMessage(messageText, currentScore);
  return currentScore;
};

const updateScore = function (currentScore) {
  return currentScore > 0 ? currentScore - 1 : 0;
};

const updateMessage = function (newMessage, currentScore) {
  if (currentScore > 0) {
    message.textContent = newMessage;
  } else {
    message.textContent = '💥 you lost the game!';
  }
};

const setNewGame = function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  message.textContent = startMessage;
  number.textContent = startNumber;
  number.style.width = '15rem';
  domBody.style.backgroundColor = '#222';
  score = 20;
  displayScore.textContent = score;
  domGuess.value = '';
  isGameActive = true;
  btnCheck.addEventListener('click', checkNumber);
};

// Events/Actions of the buttons
btnAgain.addEventListener('click', setNewGame);
btnCheck.addEventListener('click', checkNumber);
