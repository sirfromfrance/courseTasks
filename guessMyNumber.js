"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
function displaySecretNum(secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //not a number
  if (!guess) {
    displayMessage("not a number👺");
  } else if (guess === secretNumber) {
    //correct number
    displayMessage("correct number 💅💅💅");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    displaySecretNum(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    //too high or too low
    if (score > 1) {
      displayMessage(guess > secretNumber ? "too high🤷‍♀️" : "too low😒");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lost the game🫠");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  displaySecretNum("?");
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
});
