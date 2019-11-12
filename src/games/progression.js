import {
  askAnswer, hiThere, answer, userName,
} from '..';


export default () => {
  hiThere('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 10 + 1);
    const randomNum2 = Math.floor(Math.random() * 10 + 1);

    const progression = (num1, num2) => {
      const tenNumbers = [];
      for (let x = num1, c = 0; c < 10; c += 1, x += num2) {
        tenNumbers.push(x);
      }
      return tenNumbers;
    };

    const calculatingOf = progression(randomNum1, randomNum2);
    const item = calculatingOf[Math.floor(Math.random() * calculatingOf.length)];
    const mapped = calculatingOf.map((x) => (x === item ? '..' : x));
    console.log(mapped);
    console.log(`Question: ${mapped.join(' ')}`);
    askAnswer();
    const startProgression = () => {
      if (answer === `${item}` && i === 2) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      }
      if (answer === `${item}`) {
        return console.log('Correct!');
      }
      i = 3;
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${item}'. Let's try again, ${userName}!`);
    };
    startProgression();
  }
};
