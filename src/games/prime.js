import randomNum from './randomNum';

const isPrime = (num) => {
  if (num < 2) return 'yes';
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  const someNum = randomNum(0, 10);
  const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = someNum;
  const rightAnswer = isPrime(someNum);
  const requiredData = [quest, question, rightAnswer];
  return requiredData;
};
