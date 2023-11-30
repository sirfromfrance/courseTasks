"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const currentEl0 = document.querySelector("#current--0");
const currentEl1 = document.querySelector("#current--1");

score0El.textContent = 0;
score1El.textContent = 0;
currentEl0.textContent = 0;
currentEl1.textContent = 0;
let activePlayer, currentScore, playing, scores;

const currentScoreElement = document.querySelector(".current-score");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const diceElement = document.querySelector(".dice");

init();
function init() {
  scores = [0, 0];
  playing = true;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  player0El.classList.add("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
  diceElement.classList.add("hidden");
}

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `dice-${dice}.png`;
    diceElement.classList.remove("hidden");
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
