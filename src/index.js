import readlineSync from 'readline-sync';

export default (quest, getQuestionAndAnswer, maxRoundsCount) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${quest}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi there, ${userName}!\n`);

  for (let roundCount = 1; roundCount <= maxRoundsCount; roundCount += 1) {
    const [questionToUser, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${questionToUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!\n');
      if (roundCount === 3) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!\n`);
      break;
    }
  }
};
