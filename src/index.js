import readlineSync from 'readline-sync';
import calc from './games/calc';
import even from './games/even';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';

// если концепцию пар запрещено использовать отдельно от библиотеки
// то лучше воспользуюсь массивами
// надеюсь, это легитимно в рамках проекта

const runGame = (gameLogic) => {
  const quest = gameLogic()[0];
  console.log(`Welcome to the Brain Games!\n${quest}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi there, ${userName}!\n`);

  const maxRounds = 3;
  for (let countRounds = 0; countRounds < maxRounds; countRounds += 1) {
    const start = () => {
      const logicData = gameLogic();
      const question = logicData[1];
      const rightAnswer = logicData[2];

      console.log(`Question: ${question}`);
      const yourAnswer = readlineSync.question('Your answer: ');

      let messageToUser = '';
      if (yourAnswer === rightAnswer && countRounds === 2) {
        messageToUser = `Correct!\n\nCongratulations, ${userName}!`;
      } else if (yourAnswer === rightAnswer) {
        messageToUser = 'Correct!\n';
      } else {
        countRounds = maxRounds;
        messageToUser = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!\n`;
      }

      return console.log(messageToUser);
    };

    start();
  }
};

export const runCalc = () => runGame(calc);
export const runEven = () => runGame(even);
export const runGcd = () => runGame(gcd);
export const runPrime = () => runGame(prime);
export const runProgression = () => runGame(progression);
