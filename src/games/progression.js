import randomNumber from './randomNum';
import runGameEngine from '..';

const сalculateArithmeticProgression = (number, rangeOfShift, requiredArrayLength) => {
  const numbersInArray = [];
  let numberForArray = number;

  for (let length = 0; length < requiredArrayLength; length += 1, numberForArray += rangeOfShift) {
    numbersInArray.push(numberForArray);
  }
  return numbersInArray;
};
const questDescription = 'What number is missing in the progression?';
const arrayLength = 10;

const unzipGameData = () => {
  const number = randomNumber(1, 10);
  const shift = randomNumber(1, 10);

  const requiredNumbers = сalculateArithmeticProgression(number, shift, arrayLength);
  const randomArrayIndex = randomNumber(0, requiredNumbers.length - 1);

  const rightAnswer = String(requiredNumbers[randomArrayIndex]);
  const hiddingRandomNumberFromNumbers = requiredNumbers.map((x) => (x === Number(rightAnswer) ? '..' : x));

  const question = hiddingRandomNumberFromNumbers.join(' ');

  const requiredData = [question, rightAnswer];
  return requiredData;
};

const startGame = () => runGameEngine(questDescription, unzipGameData);

export default startGame;
