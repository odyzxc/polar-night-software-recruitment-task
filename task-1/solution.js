// assuming that the input
const solution = numbers => {
  const expectedSumWithMissingElement =
    ((numbers.length + 2) * (numbers.length + 1)) / 2;

  const sum = numbers.reduce((result, current) => result + current, 0);

  return expectedSumWithMissingElement - sum;
};

module.exports = solution;
