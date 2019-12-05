import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const value1 = randomNumber(0, 10);
  const value2 = randomNumber(0, 10);

  const operation = operations[randomNumber(0, operations.length - 1)];

  const question = `${value1} ${operation} ${value2}`;

  let rightAnswer;
  switch (operation) {
    case '+':
      rightAnswer = `${value1 + value2}`;
      break;
    case '-':
      rightAnswer = `${value1 - value2}`;
      break;
    case '*':
      rightAnswer = `${value1 * value2}`;
      break;
    default:
      break;
  }

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer);

export default startGame;
