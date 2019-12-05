import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'Find the greatest common divisor of given numbers.';
const findGreatestCommonDivisor = (number1, number2) => {
  let possibleDivisor = number1;
  while (possibleDivisor > 0) {
    if (number1 % possibleDivisor === 0 && number2 % possibleDivisor === 0) return possibleDivisor;
    possibleDivisor -= 1;
  }
  return 1;
};

const getQuestionAndAnswer = () => {
  const value1 = randomNumber(0, 10);
  const value2 = randomNumber(0, 10);

  const question = `${value1} ${value2}`;
  const rightAnswer = String(findGreatestCommonDivisor(value1, value2));

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer);

export default startGame;
