import randomNumber from './randomNum';
import runGameEngine from '..';

const isEven = (number) => number % 2 === 0;
const questDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const unzipGameData = () => {
  const requiredNumber = randomNumber(0, 10);

  const question = requiredNumber;

  const rightAnswer = isEven(requiredNumber) ? 'yes' : 'no';

  const requiredData = [question, rightAnswer];
  return requiredData;
};

const startGame = () => runGameEngine(questDescription, unzipGameData);

export default startGame;
