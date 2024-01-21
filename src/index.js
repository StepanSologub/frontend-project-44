import * as client from './cli.js';

const isEven = (num) => num % 2 === 0;
const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomOperation = () => {
  let result = '';
  const num = getRandomInt(3);
  switch (num) {
    case 0:
      result = '+';
      break;
    case 1:
      result = '-';
      break;
    case 2:
      result = '*';
      break;
    default:
      result = '?';
      break;
  }
  return result;
};

const game = (instruction, mode) => {
  console.log('Welcome to the Brain Games!');
  const userName = client.askForName();
  console.log(`Hello, ${userName}!`);
  console.log(instruction);

  let score = 0;
  for (let test = 1; test <= 3; test += 1) {
    let answer = '';
    let correctAnswer = '';
    const maxValue = 100;
    const numbers = [getRandomInt(maxValue), getRandomInt(maxValue)];
    const operation = getRandomOperation();

    switch (mode) {
      case 'even':
        console.log(`Question: ${numbers[0]}`);
        correctAnswer = isEven(numbers[0]) ? 'yes' : 'no';
        break;
      case 'calc':
        console.log(`Question: ${numbers[0]} ${operation} ${numbers[1]}`);
        switch (operation) {
          case '+':
            correctAnswer = String(numbers[0] + numbers[1]);
            break;
          case '-':
            correctAnswer = String(numbers[0] - numbers[1]);
            break;
          case '*':
            correctAnswer = String(numbers[0] * numbers[1]);
            break;
          default: break;
        }
        break;
      default: break;
    }

    answer = client.getAnswer();
    if (answer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (score === 3) console.log(`Congratulations, ${userName}!`);
};

export default game;
