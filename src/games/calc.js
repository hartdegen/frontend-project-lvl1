export default () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const signs = ['+', '-', '*'];
  const randomSign = signs[Math.floor(Math.random() * signs.length)];
  console.log(`Question: ${randomNum1} ${randomSign} ${randomNum2}`);
  const rightAnswer = String(eval(`${randomNum1}${randomSign}${randomNum2}`));
  return rightAnswer;
};
