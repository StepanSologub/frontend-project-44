import * as client from './cli.js';
import * as math from './math.js';

const user = {
  name: '',
  answer: '',
};

const game = {
  correctAnswer: '',
  numbers: [],
  operation: '',
  progression: [],
  progressionLength: 10,
  maxValue: 30,
  score: 0,
  over: false,
};

const greeting = (user) => {
  console.log('Welcome to the Brain Games!');
  user.name = client.askForName();
  console.log(`Hello, ${user.name}!`);
};

const setUp = (game) => {
  game.numbers = [math.getRandomInt(game.maxValue), math.getRandomInt(game.maxValue)];
  game.operation = math.getRandomOperation();
  game.progression = math.getProgression(game.progressionLength, game.maxValue);
};

const generateQuestion = (game, mode) => {
  let elementPosition = 0;
  let question = '';
  switch (mode) {
    case 'even':
      console.log(`Question: ${game.numbers[0]}`);
      game.correctAnswer = math.isEven(game.numbers[0]) ? 'yes' : 'no';
      break;

    case 'calc':
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
      break;

    case 'gcd':
      console.log(`Question: ${game.numbers[0]} ${game.numbers[1]}`);
      game.correctAnswer = String(math.getGCD(game.numbers[0], game.numbers[1]));
      break;

    case 'progression':
      elementPosition = math.getRandomInt(game.progressionLength - 1);
      game.correctAnswer = String(game.progression[elementPosition]);
      question = `Question: ${game.progression[0]}`;
      game.progression[elementPosition] = '..';
      for (let i = 1; i < game.progressionLength; i += 1) {
        question = `${question} ${game.progression[i]}`;
      }
      console.log(question);
      break;

    case 'prime':
      console.log(`Question: ${game.numbers[0]}`);
      game.correctAnswer = math.isPrime(game.numbers[0]) ? 'yes' : 'no';
      break;

    default: break;
  }
};

const processAnswer = (game, user) => {
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

const congratulation = (game, user) => {
  if (game.score === 3) console.log(`Congratulations, ${user.name}!`);
};

const runGame = (instruction, mode) => {
  greeting(user);
  console.log(instruction);

  for (let question = 1; question <= 3; question += 1) {
    setUp(game);
    generateQuestion(game, mode);
    processAnswer(game, user);
    if (game.over) break;
  }
  congratulation(game, user);
};

export default runGame;
