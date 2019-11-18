import randomNum from './randomNum';
import { cons } from '..';

export default () => {
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  const signs = ['+', '-', '*'];
  const randomSign = signs[Math.floor(Math.random() * signs.length)];
  const quest = 'What is the result of the expression?';
  const actionBetweenNum1Num2 = `${randomNum1} ${randomSign} ${randomNum2}`;
  const question = `Question: ${actionBetweenNum1Num2}`;
  const rightAnswer = String(eval(`${actionBetweenNum1Num2}`));
  const requiredData = cons(quest, cons(question, rightAnswer));
  return requiredData;
};
