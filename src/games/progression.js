import randomNumFrom0to99 from './randomNum';
import { cons } from '..';

const сalculatingOfArithmeticProgression = (num1, num2) => {
  const tenNumbers = [];
  for (let x = num1, c = 0; c < 10; c += 1, x += num2) {
    tenNumbers.push(x);
  }
  return tenNumbers;
};

export default () => {
  const randomNum1 = randomNumFrom0to99() + 1;
  const randomNum2 = randomNumFrom0to99() + 1;
  const requiredTenNumbers = сalculatingOfArithmeticProgression(randomNum1, randomNum2);
  const rightAnswer = requiredTenNumbers[Math.floor(Math.random() * requiredTenNumbers.length)];
  const hiddingSomeNumFromTenNumbers = requiredTenNumbers.map((x) => (x === rightAnswer ? '..' : x));
  const quest = 'What number is missing in the progression?';
  const question = `Question: ${hiddingSomeNumFromTenNumbers.join(' ')}`;
  const requiredData = cons(quest, cons(question, String(rightAnswer)));
  return requiredData;
};
