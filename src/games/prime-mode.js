import * as math from '../math.js';

const runPrimeMode = (dataset) => {
  console.log(`Question: ${dataset.numbers[0]}`);
  return math.isPrime(dataset.numbers[0]) ? 'yes' : 'no';
};

export default runPrimeMode;
