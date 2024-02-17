import * as math from '../math.js';

const runGCDMode = (dataset) => {
  console.log(`Question: ${dataset.numbers[0]} ${dataset.numbers[1]}`);
  return String(math.getGCD(dataset.numbers[0], dataset.numbers[1]));
};

export default runGCDMode;
