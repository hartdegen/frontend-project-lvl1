import randomNumber from './randomNum';
import runGameEngine from '..';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const questDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const unzipGameData = () => {
  const question = randomNumber(0, 10);

  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  const requiredData = [question, rightAnswer];
  return requiredData;
};

const startGame = () => runGameEngine(questDescription, unzipGameData);

export default startGame;
