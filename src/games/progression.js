import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'What number is missing in the progression?';
const сalculateArithmeticProgression = (startingNumber, difference) => {
  const numbers = [];
  for (let i = 0; i < 10; i += 1) {
    numbers.push(startingNumber + difference * i);
  }
  return numbers;
};

const getQuestionAndAnswer = () => {
  const startingNumber = randomNumber(1, 10);
  const differenceFromStartingNumber = randomNumber(1, 10);

  const numbers = сalculateArithmeticProgression(startingNumber, differenceFromStartingNumber);
  const randomArrayIndex = randomNumber(0, numbers.length - 1);

  const rightAnswer = String(numbers[randomArrayIndex]);
  const hiddingRandomNumberFromNumbers = numbers.map((x) => (x === Number(rightAnswer) ? '..' : x));
  const question = hiddingRandomNumberFromNumbers.join(' ');

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer);

export default startGame;
