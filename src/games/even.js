import randomNumber from './randomNum';
import runGameEngine from '..';

const isEven = (number) => number % 2 === 0;
const quest = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = randomNumber(0, 10);

  const rightAnswer = isEven(question) ? 'yes' : 'no';

  const requiredData = [question, rightAnswer];
  return requiredData;
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer);

export default startGame;
