import randomNum from './randomNum';
import { cons } from '..';

const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

export default () => {
  const someNum = randomNum();
  const quest = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = `Question: ${someNum}`;
  const rightAnswer = isEven(someNum);
  const requiredData = cons(quest, cons(question, rightAnswer));
  return requiredData;
};
