'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

function addClass(element, text) {
  return element.classList.add(text);
}

function removeClass(element, text) {
  return element.classList.remove(text);
}

function toggleClass(element, text) {
  return element.classList.toggle(text);
}

const playAgain = select('.again');
const restart = select('.restart');
const start = select('.start');
const randomNum = select('.front-face');
const remainingGuesses = select('.guess-count');
const input = select('.guess');
const output = select('.output');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

remainingGuesses.innerText = 5;

function setRemainingGuesses() {
  let remainingGuess = parseInt(remainingGuesses.innerText);
  if (remainingGuess > 0) {
    remainingGuess -= 1;
    remainingGuesses.innerText = remainingGuess
  }
}

function setRandomNumber() {
  return randomNum.innerText = setRandomNumber(1, 50);
}

function checkGuess() {
  let currentGuess = parseInt(input.value);
  let numToGuess = parseInt(randomNum.innerText);

  if (currentGuess > numToGuess) output.innerText = 'My number is Lower than that!';
  if (currentGuess < numToGuess) output.innerText = 'My number is higher than that!';
  if (currentGuess === numToGuess) output.innerText = 'You did it! Wahoo!';
}

function verifyInput(event) {
 if(isNaN(event.key) && event.key !== 'Backspace') {
  event.preventDefault();
 }
}

listen('keydown', input, (event) => {
  verifyInput(event);
});