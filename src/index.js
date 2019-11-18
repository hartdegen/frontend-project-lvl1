import readlineSync from 'readline-sync';

const cons = (a, b) => (message) => {
  if (message === 'car') return a;
  if (message === 'cdr') return b;
};

const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

let userName;
let yourAnswer;
const askName = () => userName = readlineSync.question('May I have your name? ');
const askAnswer = () => yourAnswer = readlineSync.question('Your answer: ');

const hiThere = (task = '') => {
  console.log(`Welcome to the Brain Games!\n${task}\n`);
  askName();
  console.log(`Hi there, ${userName}!`);
};

const runGame = (gameLogic) => {
  const quest = car(gameLogic());
  hiThere(quest);
  for (let i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-loop-func
    const start = () => {
      const logic = gameLogic();
      const question = car(cdr(logic));
      const rightAnswer = cdr(cdr(logic));

      console.log(question);
      askAnswer();
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


export { hiThere, runGame, cons };