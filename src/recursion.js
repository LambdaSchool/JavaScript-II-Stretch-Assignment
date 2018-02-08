// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  return n <= 2 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  return n <= 1 ? 1 : nFactorial(n - 1) * n;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
