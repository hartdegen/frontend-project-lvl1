import randomNum from './randomNum';
import gameEngine from '..';

const isEven = (num) => num % 2 === 0;

const gameLogic = () => {
  const number = randomNum(0, 10);

  const quest = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = number;

  const rightAnswer = isEven(number) ? 'yes' : 'no';

  const requiredData = [quest, question, rightAnswer];
  return requiredData;
};

const gameExecution = () => gameEngine(gameLogic);

export default gameExecution;
