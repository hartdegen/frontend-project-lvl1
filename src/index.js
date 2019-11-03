import readlineSync from 'readline-sync';

let answer;
const yourAnswer = () => {
  answer = readlineSync.question('Your answer ');
};

const isEven = (userName) => {
  for (let i = 0; i < 5; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    yourAnswer();
    const check = (someAnswer) => {
      if (randomNum % 2 === 0 && someAnswer === 'yes' && i === 4) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (randomNum % 2 !== 0 && someAnswer === 'no' && i === 4) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (randomNum % 2 === 0 && someAnswer === 'yes') {
        return console.log('Correct!');
      }
      if (randomNum % 2 !== 0 && someAnswer === 'no') {
        return console.log('Correct!');
      }
      i = 5;
      const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
      return console.log(`'${someAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
    };
    check(answer);
  }
};

export { isEven };
