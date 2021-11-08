'use strict';

const roll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let hold = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');
let allSocer1 = 0;
let allSocer2 = 0;
let current1 = 0;
let current2 = 0;
let holding = true;
let playing = true;
const showCurrent1 = num => (currentScore1.textContent = num);
const showCurrent2 = num => (currentScore2.textContent = num);

roll.addEventListener('click', () => {
  dice.classList.remove('hidden');
  if (allSocer1 < 100 && allSocer2 < 100) {
    const numRandon = Math.trunc(Math.random() * 6) + 1;
    dice.setAttribute('src', `./images/dice-${numRandon}.png`);
    if (playing) {
      if (numRandon > 1) {
        current1 += numRandon;
        showCurrent1(current1);
      } else {
        current1 = 0;
        showCurrent1(current1);
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        playing = false;
      }
    } else {
      if (numRandon > 1) {
        current2 += numRandon;
        showCurrent2(current2);
      } else {
        current2 = 0;
        showCurrent2(current2);
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        playing = true;
      }
    }
  }
});

hold.addEventListener('click', () => {
  if (playing) {
    allSocer1 += current1;
    score1.textContent = allSocer1;
    current1 = 0;
    showCurrent1(current1);
    if (allSocer1 >= 100) {
      //player--winner
      //current1=current1
      player1.classList.remove('player--active');
      player1.classList.add('player--winner');
    } else {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      playing = false;
    }
  } else {
    allSocer2 += current2;
    score2.textContent = allSocer2;
    current2 = 0;
    showCurrent2(current2);

    if (allSocer2 >= 100) {
      //player--winner
      player2.classList.remove('player--active');
      player2.classList.add('player--winner');
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      playing = true;
    }
  }
});

newGame.addEventListener('click', () => {
  allSocer1 = 0;
  allSocer2 = 0;
  score1.textContent = allSocer1;
  score2.textContent = allSocer2;
  current1 = 0;
  current2 = 0;
  showCurrent1(current1);
  showCurrent2(current2);
  playing = true;
  dice.classList.add('hidden');
  player2.classList.remove('player--active');
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
});
