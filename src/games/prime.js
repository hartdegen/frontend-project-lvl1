import {
  askAnswer, hiThere, answer, userName,
} from '..';

const isPrime = (x) => {
  if (x < 2) return 'yes';
  for (let i = 2; i < x / 2; i += 1) {
    if (x % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  hiThere('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNum}`);
    askAnswer();
    const check = () => {
      if (answer === `${isPrime(randomNum)}` && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (answer === `${isPrime(randomNum)}`) {
        return console.log('Correct!');
      }
      i = 3;
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomNum)}'. Let's try again, ${userName}!`);
    };
    check();
  }
};
