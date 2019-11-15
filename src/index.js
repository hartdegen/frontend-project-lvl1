import readlineSync from 'readline-sync';

let userName;
let yourAnswer;
const askName = () => {
  userName = readlineSync.question('May I have your name? ');
};
const askAnswer = () => {
  yourAnswer = readlineSync.question('Your answer: ');
};

const hiThere = (task = '') => {
  console.log(`Welcome to the Brain Games!\n${task}\n`);
  askName();
  console.log(`Hi there, ${userName}!`);
};

const runGame = (quest, gameLogic) => {
  hiThere(quest);
  for (let i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-loop-func
    const start = () => {
      const correctAnswer = gameLogic();
      console.log(correctAnswer);
      askAnswer();
      if (yourAnswer === correctAnswer && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (yourAnswer === correctAnswer) {
        return console.log('Correct!');
      }
      i = 3;
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    };
    start();
  }
};


export { hiThere, runGame };
