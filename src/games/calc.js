import {
  askAnswer, hiThere, answer, userName,
} from '..';

export default () => {
  hiThere('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const signs = ['+', '-', '*'];
    const sign = signs[Math.floor(Math.random() * signs.length)];

    console.log(`Question: ${randomNum1} ${sign} ${randomNum2}`);
    askAnswer();
    const calc = () => {
      if (answer === `${eval(`${randomNum1}${sign}${randomNum2}`)}` && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (answer === `${eval(`${randomNum1}${sign}${randomNum2}`)}`) {
        return console.log('Correct!');
      }
      i = 3;
      const rightAnswer = eval(`${randomNum1}${sign}${randomNum2}`);
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
    };
    calc(answer);
  }
};
