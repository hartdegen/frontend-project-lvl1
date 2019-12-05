import readlineSync from 'readline-sync';

const maxRoundsCount = 3;

export default (quest, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${quest}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi there, ${userName}!\n`);

  for (let i = 1; i <= maxRoundsCount; i += 1) {
    const [questionToUser, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${questionToUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
