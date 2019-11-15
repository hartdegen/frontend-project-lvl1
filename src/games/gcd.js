const greatestCommonDivisor = (num1, num2) => {
  let possibleDiv = num1;
  while (possibleDiv > 0) {
    if (num1 % possibleDiv === 0 && num2 % possibleDiv === 0) return possibleDiv;
    possibleDiv -= 1;
  }
  return 1;
};

export default () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const rightAnswer = String(greatestCommonDivisor(randomNum1, randomNum2));
  return rightAnswer;
};
