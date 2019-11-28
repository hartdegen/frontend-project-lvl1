import readlineSync from 'readline-sync';

export default (quest, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${quest}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi there, ${userName}!\n`);

  const maxRoundsCount = 3;

  for (let roundCount = 1; roundCount <= maxRoundsCount; roundCount += 1) {
    const [questionToUser, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${questionToUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!\n`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
