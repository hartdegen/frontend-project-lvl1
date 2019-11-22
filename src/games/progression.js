import randomNum from './randomNum';
import gameEngine from '..';

const сalculataArithmeticProgression = (num1, num2) => {
  const requiredenNumbers = [];
  const arrayLength = 10;
  const stepOfShift = num2;
  let numForArray = num1;
  for (let length = 0; length < arrayLength; length += 1, numForArray += stepOfShift) {
    requiredenNumbers.push(numForArray);
  }
  return requiredenNumbers;
};

const gameLogic = () => {
  const randomNum1 = randomNum(1, 10);
  const randomNum2 = randomNum(1, 10);
  const requiredTenNumbers = сalculataArithmeticProgression(randomNum1, randomNum2);
  const randomArrayIndex = randomNum(0, requiredTenNumbers.length);
  const rightAnswer = requiredTenNumbers[randomArrayIndex];
  const hiddingSomeNumFromTenNumbers = requiredTenNumbers.map((x) => (x === rightAnswer ? '..' : x));
  const quest = 'What number is missing in the progression?';
  const question = hiddingSomeNumFromTenNumbers.join(' ');
  const requiredData = [quest, question, String(rightAnswer)];
  return requiredData;
};

const gameExecution = () => gameEngine(gameLogic);

export default gameExecution;
