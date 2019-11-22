import randomNum from './randomNum';
import gameEngine from '..';

const isPrime = (num) => {
  if (num < 2) return true;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameLogic = () => {
  const numberForCheck = randomNum(0, 10);
  const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = numberForCheck;
  const rightAnswer = isPrime(numberForCheck) ? 'yes' : 'no';
  const requiredData = [quest, question, rightAnswer];
  return requiredData;
};

const gameExecution = () => gameEngine(gameLogic);

export default gameExecution;
