import randomNumFromTo from './randomNum';
import gameEngine from '..';

const сalculateArithmeticProgression = (num, rangeOfShift, requiredArrayLength) => {
  const numbersInArray = [];

  let numberForArray = num;
  for (let length = 0; length < requiredArrayLength; length += 1, numberForArray += rangeOfShift) {
    numbersInArray.push(numberForArray);
  }
  return numbersInArray;
};

const gameLogic = () => {
  const number = randomNumFromTo(1, 10);
  const shift = randomNumFromTo(1, 10);
  const arrayLength = 10;

  const requiredNumbers = сalculateArithmeticProgression(number, shift, arrayLength);
  const randomArrayIndex = randomNumFromTo(0, requiredNumbers.length - 1);

  const rightAnswer = String(requiredNumbers[randomArrayIndex]);
  const hiddingRandomNumberFromNumbers = requiredNumbers.map((x) => (x === Number(rightAnswer) ? '..' : x));

  const questDescription = 'What number is missing in the progression?';
  const questionToUser = hiddingRandomNumberFromNumbers.join(' ');

  const requiredData = [questDescription, questionToUser, rightAnswer];
  return requiredData;
};

const gameExecution = () => gameEngine(gameLogic);

export default gameExecution;
