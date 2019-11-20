import randomNum from './randomNum';

const findGreatestCommonDivisor = (num1, num2) => {
  let possibleDiv = num1;
  while (possibleDiv > 0) {
    if (num1 % possibleDiv === 0 && num2 % possibleDiv === 0) return possibleDiv;
    possibleDiv -= 1;
  }
  return 1;
};

export default () => {
  const randomNum1 = randomNum(0, 10);
  const randomNum2 = randomNum(0, 10);
  const quest = 'Find the greatest common divisor of given numbers.';
  const question = `${randomNum1} ${randomNum2}`;
  const rightAnswer = String(findGreatestCommonDivisor(randomNum1, randomNum2));
  const requiredData = [quest, question, rightAnswer];
  return requiredData;
};
