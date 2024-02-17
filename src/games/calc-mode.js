const runCalcMode = (dataset) => {
  console.log(`Question: ${dataset.numbers[0]} ${dataset.operation} ${dataset.numbers[1]}`);
  switch (dataset.operation) {
    case '+': return String(dataset.numbers[0] + dataset.numbers[1]);
    case '-': return String(dataset.numbers[0] - dataset.numbers[1]);
    case '*': return String(dataset.numbers[0] * dataset.numbers[1]);
    default: break;
  }
  return 0;
};

export default runCalcMode;
