"use strict";
//set user1 score and user2 score to zer0
//hide the dice
const score0El = document.getElementById("score--0");
score0El.textContent = 0;
const score1El = document.querySelector("#score--1");
score1El.textContent = 0;
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");
const currentScoreEl = document.querySelector(".current-score");
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
//button for dice
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
//rolling the dice
buttonRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
buttonHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

//resetting the game
buttonNew.addEventListener("click", function () {

 playing = true;

  scores[0] = 0;
  scores[1] = 0;
  document.getElementById(`score--${activePlayer}`).textContent = scores[0];
  document.getElementById(`score--${activePlayer}`).textContent = scores[1];
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
});
