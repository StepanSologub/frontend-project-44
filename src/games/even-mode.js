import * as math from '../math.js';

const runEvenMode = (dataset) => {
  console.log(`Question: ${dataset.numbers[0]}`);
  return math.isEven(dataset.numbers[0]) ? 'yes' : 'no';
};

export default runEvenMode;
