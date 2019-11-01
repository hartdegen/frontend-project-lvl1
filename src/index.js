import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name? ');

export const randomNum = Math.floor(Math.random() * 100);
export const yoAnswer = readlineSync.question('Your answer ');
export const isEven = (answer) => {
  if (randomNum % 2 === 0 && answer === 'yes') {
    return console.log(`Correct!\nCongratulations, ${userName}!`);
  }
  if (randomNum % 2 !== 0 && answer === 'no') {
    return console.log(`Correct!\nCongratulations, ${userName}!`);
  }
  if (randomNum % 2 === 0 && answer === 'yes') {
    return console.log('Correct!');
  }
  if (randomNum % 2 !== 0 && answer === 'no') {
    return console.log('Correct!');
  }
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return console.log(`'${yoAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
};