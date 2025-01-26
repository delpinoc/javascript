'use strict';

// DOM elements
// buttons
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// img
let diceFace = document.querySelector(".dice");

// Logic of game
const defaultValue = 0;
let realScores = [defaultValue, defaultValue];
let currentScores = [defaultValue, defaultValue];
const winningScore = 10;
let isGameRunning = true;

// 0 --> player 0
// 1 --> player 1
let playerActive = 0;

const newGame = function () {
    isGameRunning = true;
    playerActive = 0;
    const currentScoresElement = document.querySelectorAll(".current-score");
    const realScoresElement = document.querySelectorAll(".score");

    for(let player = 0; player < currentScoresElement.length; player++) {
        currentScoresElement[player].textContent = String(defaultValue);
        realScoresElement[player].textContent = String(defaultValue);
    }

    currentScores = [defaultValue, defaultValue];
    realScores = [defaultValue, defaultValue];

    if (!diceFace.classList.contains(("hidden"))) {
        diceFace.classList.add("hidden");
    }

    let player1 = document.querySelector(".player--0");
    let player2 = document.querySelector(".player--1");
    player1.classList.add("player--active");
    player2.classList.remove("player--active")

    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");

}

// functions
const rollDice = function () {
    if(isGameRunning) {
        const currentPlayer = document.querySelector(`#current--${playerActive}`);
        const randomDiceFace = Math.floor(Math.random() * 6) + 1;

        if (diceFace.classList.contains("hidden")) {
            diceFace.classList.remove("hidden");
        }
        diceFace.src = `dice-faces/dice-${randomDiceFace}.png`;
        if (randomDiceFace !== 1) {
            currentScores[playerActive] += randomDiceFace;
            currentPlayer.textContent = currentScores[playerActive];
        } else {
            currentScores[playerActive] = defaultValue;
            currentPlayer.textContent = String(defaultValue);
            switchPlayer();
        }
    }
}

const holdScore = function () {
    if(isGameRunning) {
        const currentPlayer = document.querySelector(`#current--${playerActive}`);
        const currentScore = document.querySelector(`#score--${playerActive}`);
        realScores[playerActive] += currentScores[playerActive];
        currentPlayer.textContent = String(defaultValue);
        currentScore.textContent = String(realScores[playerActive]);
        currentScores[playerActive] = defaultValue;
        console.log(realScores);
        if (realScores[playerActive] >= winningScore) {
            isGameRunning = false;
            diceFace.classList.add("hidden");
            document.querySelector(`.player--${playerActive}`).classList.add("player--winner");
        } else {
            switchPlayer();
        }
    }
}

const switchPlayer = function () {
    let currentPlayerActive = document.querySelector(`.player--${playerActive}`);
    playerActive = playerActive === 0 ? 1 : 0;
    currentPlayerActive.classList.toggle("player--active");
    currentPlayerActive = document.querySelector(`.player--${playerActive}`);
    currentPlayerActive.classList.toggle("player--active");
}


//TODO 3.- User resets game
btnNewGame.addEventListener("click", newGame);

//TODO 1.- User rolls dice
btnRollDice.addEventListener("click", rollDice);

//TODO 2.- User holds score
btnHold.addEventListener("click", holdScore)


newGame();
