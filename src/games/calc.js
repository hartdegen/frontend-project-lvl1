import randomNum from './randomNum';
import gameEngine from '..';

const gameLogic = () => {
  const num1 = randomNum(0, 10);
  const num2 = randomNum(0, 10);
  const actionsBetweenNums = ['+', '-', '*'];
  const randomAction = actionsBetweenNums[randomNum(0, actionsBetweenNums.length - 1)];
  const quest = 'What is the result of the expression?';
  const question = `${num1} ${randomAction} ${num2}`;
  let rightAnswer;
  switch (randomAction) {
    case actionsBetweenNums[0]:
      rightAnswer = `${num1 + num2}`;
      break;

    case actionsBetweenNums[1]:
      rightAnswer = `${num1 - num2}`;
      break;

    case actionsBetweenNums[2]:
      rightAnswer = `${num1 * num2}`;
      break;

    default:
      break;
  }
  const requiredData = [quest, question, rightAnswer];
  return requiredData;
};

const gameExecution = () => gameEngine(gameLogic);

export default gameExecution;
