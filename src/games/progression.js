import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'What number is missing in the progression?';
const maxRoundsCount = 3;
const сalculateArithmeticProgression = (startNumber, shiftNumber) => {
  const numbers = [];
  const numbersLength = 10;
  for (let i = 0; i < numbersLength; i += 1) {
    numbers.push(startNumber + shiftNumber * i);
  }
  return numbers;
};

const getQuestionAndAnswer = () => {
  const startNumber = randomNumber(1, 10);
  const shiftNumber = randomNumber(1, 10);

  const numbers = сalculateArithmeticProgression(startNumber, shiftNumber);

  const rightAnswer = String(numbers[randomNumber(0, numbers.length - 1)]);
  const hiddingRandomNumberFromNumbers = numbers.map((x) => (x === Number(rightAnswer) ? '..' : x));
  const question = hiddingRandomNumberFromNumbers.join(' ');

  return [question, rightAnswer, maxRoundsCount];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer, maxRoundsCount);

export default startGame;
