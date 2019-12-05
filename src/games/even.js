import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = randomNumber(0, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer);

export default startGame;
