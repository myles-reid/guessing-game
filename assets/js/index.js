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
  let currentGuess = parseInt(remainingGuesses.innerText);
  if (currentGuess > 0) {
    currentGuess -= 1;
    remainingGuesses.innerText = currentGuess
  }
}

function setRandomNumber() {
  return randomNum.innerText = setRandomNumber(1, 50);
}

