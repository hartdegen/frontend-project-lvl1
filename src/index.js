import readlineSync from 'readline-sync';

export default (questDescription, unzipGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${questDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi there, ${userName}!\n`);

  const maxRounds = 3;
  for (let countRounds = 0; countRounds < maxRounds; countRounds += 1) {
    const data = unzipGameData();
    const questionToUser = data[0];
    const rightAnswer = data[1];

    console.log(`Question: ${questionToUser}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    let messageToUser = '';
    if (yourAnswer === rightAnswer && countRounds === 2) {
      messageToUser = `Correct!\n\nCongratulations, ${userName}!`;
    } else if (yourAnswer === rightAnswer) {
      messageToUser = 'Correct!\n';
    } else {
      countRounds = maxRounds;
      messageToUser = `'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!\n`;
    }

    console.log(messageToUser);
  }
};
