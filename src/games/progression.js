const progression = (num1, num2) => {
  const tenNumbers = [];
  for (let x = num1, c = 0; c < 10; c += 1, x += num2) {
    tenNumbers.push(x);
  }
  return tenNumbers;
};

export default () => {
  const randomNum1 = Math.floor(Math.random() * 10 + 1);
  const randomNum2 = Math.floor(Math.random() * 10 + 1);
  const calculatingOf = progression(randomNum1, randomNum2);
  const rightAnswer = calculatingOf[Math.floor(Math.random() * calculatingOf.length)];
  const hiddingSomeNum = calculatingOf.map((x) => (x === rightAnswer ? '..' : x));
  console.log(`Question: ${hiddingSomeNum.join(' ')}`);
  return String(rightAnswer);
};
