import readlineSync from 'readline-sync';

const cons = (a, b) => (message) => {
  if (message === 'car') return a;
  if (message === 'cdr') return b;
  return message;
};

const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

const runGame = (gameLogic) => {
  const quest = car(gameLogic());
  console.log(`Welcome to the Brain Games!\n${quest}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi there, ${userName}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const start = () => {
      const logic = gameLogic();
      const question = car(cdr(logic));
      const rightAnswer = cdr(cdr(logic));

      console.log(question);
      const yourAnswer = readlineSync.question('Your answer: ');

      if (yourAnswer === rightAnswer && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (yourAnswer === rightAnswer) {
        return console.log('Correct!');
      }
      i = 3;
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
    };
    start();
  }
};

export { runGame, cons };
