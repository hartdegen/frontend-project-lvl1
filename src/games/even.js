import {
  askAnswer, hiThere, answer, userName,
} from '..';

export default () => {
  hiThere('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    askAnswer();
    const checkForEven = () => {
      if (randomNum % 2 === 0 && answer === 'yes' && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (randomNum % 2 !== 0 && answer === 'no' && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (randomNum % 2 === 0 && answer === 'yes') {
        return console.log('Correct!');
      }
      if (randomNum % 2 !== 0 && answer === 'no') {
        return console.log('Correct!');
      }
      i = 3;
      const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
    };
    checkForEven(answer);
  }
};
