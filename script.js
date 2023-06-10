'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

// Updating the number
const scoreDisplay = function (score) {
  document.querySelector('.score').textContent = score;
}

// Updating the score
const numberDisplay = function (number) {
  document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log(guessedNumber);

  if (!guessedNumber) {
    displayMessage('🛑 No number!');
  } else if (guessedNumber > 20) {
    displayMessage('🚫 Out of range!');
  } else if (guessedNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(guessedNumber < randomNumber ? '😞 Too Low!' : '😕 Too High!');
      score--;
      scoreDisplay(score);
    } else {
      document.querySelector('h1').textContent = 'Game Over!';
      document.body.style.backgroundColor = 'red';
      scoreDisplay(0);
    }
  } else if (guessedNumber === randomNumber) {
    displayMessage('🎉 Correct Number');
    document.body.style.backgroundColor = '#60b347';
    numberDisplay(randomNumber);
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreDisplay(score);
  displayMessage('Start guessing...');
  numberDisplay('?');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  console.log(randomNumber);
});