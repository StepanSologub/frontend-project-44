import * as math from '../math.js';

const runProgressionMode = (dataset, progressionLength) => {
  const { progression } = dataset;
  let elementPosition = 0;
  let question = '';
  elementPosition = math.getRandomInt(progressionLength - 1);
  const result = String(progression[elementPosition]);
  question = `Question: ${progression[0]}`;
  progression[elementPosition] = '..';
  for (let i = 1; i < progressionLength; i += 1) {
    question = `${question} ${progression[i]}`;
  }
  console.log(question);
  return result;
};

export default runProgressionMode;
