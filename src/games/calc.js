import randomNum from './randomNum';

export default () => {
  const num1 = randomNum(0, 10);
  const num2 = randomNum(0, 10);
  const actionBetweenNums = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const randomAction = actionBetweenNums[randomNum(0, actionBetweenNums.length - 1)];
  const quest = 'What is the result of the expression?';
  const question = randomAction;
  let rightAnswer;
  if (randomAction === actionBetweenNums[0]) rightAnswer = num1 + num2;
  if (randomAction === actionBetweenNums[1]) rightAnswer = num1 - num2;
  if (randomAction === actionBetweenNums[2]) rightAnswer = num1 * num2;
  const requiredData = [quest, question, String(rightAnswer)];
  return requiredData;
};
