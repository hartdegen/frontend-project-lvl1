import randomNumber from './randomNum';
import runGameEngine from '..';

const operations = ['+', '-', '*'];
const questDescription = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const number1 = randomNumber(0, 10);
  const number2 = randomNumber(0, 10);

  const operation = operations[randomNumber(0, operations.length - 1)];

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

  const requiredData = [question, rightAnswer];
  return requiredData;
};

const startGame = () => runGameEngine(questDescription, getQuestionAndAnswer);

export default startGame;
