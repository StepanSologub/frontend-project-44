import * as client from './cli.js';
import * as math from './math.js';

const user = {
  name: '',
  answer: '',
};

export const game = {
  correctAnswer: '',
  numbers: [],
  operation: '',
  progression: [],
  progressionLength: 10,
  maxValue: 30,
  score: 0,
  over: false,
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  user.name = client.askForName();
  console.log(`Hello, ${user.name}!`);
};

const setUp = () => {
  game.numbers = [math.getRandomInt(game.maxValue), math.getRandomInt(game.maxValue)];
  game.operation = math.getRandomOperation();
  game.progression = math.getProgression(game.progressionLength, game.maxValue);
};

const checkModes = (mode) => {
  console.log(`Question: ${game.numbers[0]}`);
  if (mode === 'even') game.correctAnswer = math.isEven(game.numbers[0]) ? 'yes' : 'no';
  else if (mode === 'prime') game.correctAnswer = math.isPrime(game.numbers[0]) ? 'yes' : 'no';
};

const runCalcMode = () => {
  console.log(`Question: ${game.numbers[0]} ${game.operation} ${game.numbers[1]}`);
  switch (game.operation) {
    case '+':
      game.correctAnswer = String(game.numbers[0] + game.numbers[1]);
      break;
    case '-':
      game.correctAnswer = String(game.numbers[0] - game.numbers[1]);
      break;
    case '*':
      game.correctAnswer = String(game.numbers[0] * game.numbers[1]);
      break;
    default: break;
  }
};

const runGCDMode = () => {
  console.log(`Question: ${game.numbers[0]} ${game.numbers[1]}`);
  game.correctAnswer = String(math.getGCD(game.numbers[0], game.numbers[1]));
};

const runProgressionMode = () => {
  let elementPosition = 0;
  let question = '';
  elementPosition = math.getRandomInt(game.progressionLength - 1);
  game.correctAnswer = String(game.progression[elementPosition]);
  question = `Question: ${game.progression[0]}`;
  game.progression[elementPosition] = '..';
  for (let i = 1; i < game.progressionLength; i += 1) {
    question = `${question} ${game.progression[i]}`;
  }
  console.log(question);
};

const generateQuestion = (mode) => {
  switch (mode) {
    case 'even': checkModes(mode); break;
    case 'calc': runCalcMode(); break;
    case 'gcd': runGCDMode(); break;
    case 'progression': runProgressionMode(); break;
    case 'prime': checkModes(mode); break;
    default: break;
  }
};

const processAnswer = () => {
  user.answer = client.getAnswer();
  if (user.answer === game.correctAnswer) {
    console.log('Correct!');
    game.score += 1;
  } else {
    console.log(`'${user.answer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'.`);
    console.log(`Let's try again, ${user.name}!`);
    game.over = true;
  }
};

const congratulation = () => {
  if (game.score === 3) console.log(`Congratulations, ${user.name}!`);
};

const runGame = (instruction, mode) => {
  greeting();
  console.log(instruction);

  for (let question = 1; question <= 3; question += 1) {
    setUp();
    generateQuestion(mode);
    processAnswer();
    if (game.over) break;
  }
  congratulation();
};

export default runGame;
