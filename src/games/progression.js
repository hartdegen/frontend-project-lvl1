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
  const init = randomNumber(1, 10);
  const step = randomNumber(1, 10);

  const numbers = сalculateArithmeticProgression(init, step);

  const rightAnswer = String(numbers[randomNumber(0, numbers.length - 1)]);
  const hiddingRandomNumberFromNumbers = numbers.map((x) => (x === Number(rightAnswer) ? '..' : x));
  const question = hiddingRandomNumberFromNumbers.join(' ');

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer, maxRoundsCount);

export default startGame;
