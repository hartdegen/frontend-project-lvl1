#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi there, ${userName}!\n`);

for (let i = 0; i < 5; i += 1) {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const yoAnswer = readlineSync.question('Your answer ');
  const isEven = (answer) => {
    if (randomNum % 2 === 0 && answer === 'yes' && i === 4) {
      return console.log(`Correct!\nCongratulations, ${userName}!`);
    }
    if (randomNum % 2 !== 0 && answer === 'no' && i === 4) {
      return console.log(`Correct!\nCongratulations, ${userName}!`);
    }
    if (randomNum % 2 === 0 && answer === 'yes') {
      return console.log('Correct!');
    }
    if (randomNum % 2 !== 0 && answer === 'no') {
      return console.log('Correct!');
    }
    i = 5;
    const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    return console.log(`'${yoAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
  };
  isEven(yoAnswer);
}
