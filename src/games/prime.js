import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxRoundsCount = 3;
const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = randomNumber(0, 10);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer, maxRoundsCount);

export default startGame;
