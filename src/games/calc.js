import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const number1 = randomNumber(0, 10);
  const number2 = randomNumber(0, 10);

  const randomArrayIndex = randomNumber(0, operations.length - 1);
  const operation = operations[randomArrayIndex];

  const question = `${number1} ${operation} ${number2}`;

  let rightAnswer;
  switch (operation) {
    case '+':
      rightAnswer = `${number1 + number2}`;
      break;
    case '-':
      rightAnswer = `${number1 - number2}`;
      break;
    case '*':
      rightAnswer = `${number1 * number2}`;
      break;
    default:
      break;
  }

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer);

export default startGame;
