export const isEven = (num) => num % 2 === 0;

export const getRandomInt = (max) => {
  const result = Math.floor(Math.random() * max);
  return result === 0 ? 1 : result;
};

export const getRandomOperation = () => {
  let result = '';
  const num = getRandomInt(3);
  switch (num) {
    case 1:
      result = '+';
      break;
    case 2:
      result = '-';
      break;
    case 3:
      result = '*';
      break;
    default:
      result = '?';
      break;
  }
  return result;
};

export const getGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) a -= b;
    else b -= a;
  }
  return b;
};

export const getProgression = (max, length) => {
  const result = [];
  result[0] = getRandomInt(max);
  const delta = getRandomInt(max);
  for (let i = 1; i < length; i += 1) {
    result[i] = result[i - 1] + delta;
  }
  return result;
};

export const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
