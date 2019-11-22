import randomNum from './randomNum';
import gameEngine from '..';

const gameLogic = () => {
  const number1 = randomNum(0, 10);
  const number2 = randomNum(0, 10);

  const actionsBetweenNumbers = ['+', '-', '*'];
  const randomAction = actionsBetweenNumbers[randomNum(0, actionsBetweenNumbers.length - 1)];

  const quest = 'What is the result of the expression?';
  const question = `${number1} ${randomAction} ${number2}`;

  let rightAnswer;
  switch (randomAction) {
    case actionsBetweenNumbers[0]:
      rightAnswer = `${number1 + number2}`;
      break;
    case actionsBetweenNumbers[1]:
      rightAnswer = `${number1 - number2}`;
      break;
    case actionsBetweenNumbers[2]:
      rightAnswer = `${number1 * number2}`;
      break;
    default:
      break;
  }

  const requiredData = [quest, question, rightAnswer];
  return requiredData;
};

const gameExecution = () => gameEngine(gameLogic);

export default gameExecution;
