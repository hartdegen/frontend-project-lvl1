export default () => {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return rightAnswer;
};
