import randomNumber from './randomNum';
import runGameEngine from '..';

const quest = 'What number is missing in the progression?';
const сalculateArithmeticProgression = (startValue, difference, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startValue + difference * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const init = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const progressionSize = 10;

  const progression = сalculateArithmeticProgression(init, step, progressionSize);

  const rightAnswer = String(progression[randomNumber(0, progression.length - 1)]);
  const progressionWithOneHiddenNumber = progression.map((i) => (i === Number(rightAnswer) ? '..' : i));
  const question = progressionWithOneHiddenNumber.join(' ');

  return [question, rightAnswer];
};

const startGame = () => runGameEngine(quest, getQuestionAndAnswer);

export default startGame;
