'use strict'

console.log(document.querySelector('.message').textContent);


let secretNumber = Math.trunc(Math.random()*2) + 1;
let score = 2;
let highscore = 0;
let stage = 1;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.getElementById('btn-1').addEventListener('click', function()
{
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    
    displayMessage('🎉 Yaay Correct!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
        

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore-val').textContent = highscore;
    }

    //Next stage entry
    document.querySelector('.stage-val').textContent = stage++;
    
    //Working on this
    score = val;
    val++
    secretNumber = Math.trunc(Math.random() * val) + 1;
    initStatus();
    

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score-val').textContent = score;
    } else {
    
      displayMessage('💥 You lost the game!');
      document.querySelector('.score-val').textContent = 0;
    }
  }

});

document.querySelector('.btn-again').addEventListener('click', function () {
    score = 2;
    secretNumber = Math.trunc(Math.random() * 2) + 1;

    initStatus();
    
  });

  var initStatus = function (def) {
    displayMessage('Start guessing...');
    document.querySelector('.score-val').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#ccc';
    document.querySelector('.number').style.width = '15rem';
    return def
  }