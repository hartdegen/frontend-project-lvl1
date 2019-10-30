import readlineSync from 'readline-sync';

export const hiThere = () => {
   let userName = readlineSync.question('May I have your name? ');
   return console.log(`Hi there, ${userName}!`);
}
