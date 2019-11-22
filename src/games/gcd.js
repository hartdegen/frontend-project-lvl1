import randomNum from './randomNum';
import gameEngine from '..';

const findGreatestCommonDivisor = (num1, num2) => {
  let possibleDivisor = num1;
  while (possibleDivisor > 0) {
    if (num1 % possibleDivisor === 0 && num2 % possibleDivisor === 0) return possibleDivisor;
    possibleDivisor -= 1;
  }
  return 1;
};

const gameLogic = () => {
  const number1 = randomNum(0, 10);
  const number2 = randomNum(0, 10);

  const questDescription = 'Find the greatest common divisor of given numbers.';
  const questionToUser = `${number1} ${number2}`;

  const rightAnswer = String(findGreatestCommonDivisor(number1, number2));

  const requiredData = [questDescription, questionToUser, rightAnswer];
  return requiredData;
};

const gameExecution = () => gameEngine(gameLogic);

export default gameExecution;
