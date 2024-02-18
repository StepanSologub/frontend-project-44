import * as client from './cli.js';
import * as math from './math.js';
import runEvenMode from './games/even-mode.js';
import runCalcMode from './games/calc-mode.js';
import runGCDMode from './games/gcd-mode.js';
import runProgressionMode from './games/progression-mode.js';
import runPrimeMode from './games/prime-mode.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = client.askForName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getDataset = (maxValue, progressionLength) => {
  const numbers = [math.getRandomInt(maxValue), math.getRandomInt(maxValue)];
  const operation = math.getRandomOperation();
  const progression = math.getProgression(maxValue, progressionLength);
  return {
    numbers,
    operation,
    progression,
  };
};

const generateQuestion = (mode, dataset, progressionLength) => {
  switch (mode) {
    case 'even': return runEvenMode(dataset);
    case 'calc': return runCalcMode(dataset);
    case 'gcd': return runGCDMode(dataset);
    case 'progression': return runProgressionMode(dataset, progressionLength);
    case 'prime': return runPrimeMode(dataset);
    default: break;
  }
  return 0;
};

const processResponse = (correctAnswer, name, question) => {
  const userAnswer = client.getAnswer();
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    if (question === 3) console.log(`Congratulations, ${name}!`);
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

let dataset = {
  numbers: [],
  operation: '',
  progression: [],
};

const runGame = (instruction, mode) => {
  const userName = greeting();
  console.log(instruction);
  for (let question = 1; question <= 3; question += 1) {
    const maxValue = 30;
    const progressionLength = 10;
    dataset = getDataset(maxValue, progressionLength);
    const correctAnswer = generateQuestion(mode, dataset, progressionLength);
    if (!processResponse(correctAnswer, userName, question)) break;
  }
};

export default runGame;
