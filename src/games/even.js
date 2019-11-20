import randomNum from './randomNum';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const someNum = randomNum(0, 10);
  const quest = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = someNum;
  const rightAnswer = isEven(someNum);
  const requiredData = [quest, question, rightAnswer];
  return requiredData;
};
