import {
  askAnswer, hiThere, answer, userName,
} from '..';


const gcdDoing = (a, b) => {
  let x = a;
  while (x > 0) {
    if (a % x === 0 && b % x === 0) return x;
    x -= 1;
  }
  return 1;
};


export default () => {
  hiThere('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNum1} ${randomNum2}`);
    askAnswer();
    const gcd = () => {
      if (answer === `${gcdDoing(randomNum1, randomNum2)}` && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (answer === `${gcdDoing(randomNum1, randomNum2)}`) {
        return console.log('Correct!');
      }
      i = 3;
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcdDoing(randomNum1, randomNum2)}'. Let's try again, ${userName}!`);
    };
    gcd();
  }
};
