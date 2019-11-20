import randomNum from './randomNum';

const сalculataArithmeticProgression = (num1, num2) => {
  const tenNumbers = [];
  for (let x = num1, c = 0; c < 10; c += 1, x += num2) {
    tenNumbers.push(x);
  }
  return tenNumbers;
};

export default () => {
  const randomNum1 = randomNum(1, 10);
  const randomNum2 = randomNum(1, 10);
  const requiredTenNumbers = сalculataArithmeticProgression(randomNum1, randomNum2);
  const rightAnswer = requiredTenNumbers[randomNum(0, requiredTenNumbers.length)];
  const hiddingSomeNumFromTenNumbers = requiredTenNumbers.map((x) => (x === rightAnswer ? '..' : x));
  const quest = 'What number is missing in the progression?';
  const question = hiddingSomeNumFromTenNumbers.join(' ');
  const requiredData = [quest, question, String(rightAnswer)];
  console.log(rightAnswer);
  return requiredData;
};
