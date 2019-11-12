import readlineSync from 'readline-sync';

let userName;
const askName = () => {
  userName = readlineSync.question('May I have your name? ');
};
let answer;
const askAnswer = () => {
  answer = readlineSync.question('Your answer: ');
};

const hiThere = (task = '') => {
  console.log(`Welcome to the Brain Games!\n${task}\n`);
  askName();
  console.log(`Hi there, ${userName}!`);
};


export {
  askName, userName, askAnswer, answer, hiThere,
};
