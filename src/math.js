export const isEven = (num) => num % 2 === 0;

export const getRandomInt = (max) => Math.floor(Math.random() * max + 1);

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
