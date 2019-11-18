import randomNum from './randomNum';
import { cons } from '..';

const greatestCommonDivisor = (num1, num2) => {
  let possibleDiv = num1;
  while (possibleDiv > 0) {
    if (num1 % possibleDiv === 0 && num2 % possibleDiv === 0) return possibleDiv;
    possibleDiv -= 1;
  }
  return 1;
};

export default () => {
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  const quest = 'Find the greatest common divisor of given numbers.';
  const question = `Question: ${randomNum1} ${randomNum2}`;
  const rightAnswer = String(greatestCommonDivisor(randomNum1, randomNum2));
  const requiredData = cons(quest, cons(question, rightAnswer));
  return requiredData;
};
