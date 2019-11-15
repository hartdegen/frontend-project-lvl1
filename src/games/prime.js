const isPrime = (num) => {
  if (num < 2) return 'yes';
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const rightAnswer = isPrime(randomNum);
  return rightAnswer;
};
