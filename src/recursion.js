// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const limitFunctionCallCount = (n, testvalue) => {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    let count = 0;
    return () => {
      if (count === n) return null;
      count++;
      return testvalue;
    };
  };

  // return true if every property on `obj` is the same
  // otherwise return false
  const arrValues = Object.values(obj);
  for (let i = 0; i < arrValues.length; i++) {
    if (typeof obj === typeof arrValues[i]) return checkMatchingLeaves(arrValues[i]);
    
    if (arrValues[i] !== 1) return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
