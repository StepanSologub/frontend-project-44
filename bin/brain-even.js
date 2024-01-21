#!/usr/bin/env node

import * as client from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const isEven = (num) => num % 2 === 0;

console.log('Welcome to the Brain Games!');
const userName = client.askForName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let score = 0;
for (let test = 1; test <= 3; test += 1) {
  const maxValue = 100;
  const number = getRandomInt(maxValue);
  console.log(`Question: ${number}`);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const answer = client.getAnswer();

  if (answer === correctAnswer) {
    console.log('Correct!');
    score += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
if (score === 3) console.log(`Congratulations, ${userName}!`);
