// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 1 || n === 0) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};


const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let test;
  let flag = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (test === undefined && object[key] !== 'object') {
        test = object[key];
        return undefined;
      }
      if (typeof object[key] === 'object') return checkLeaves(object[key]);
      if (object[key] !== test) {
        flag = false;
        return undefined;
      }
    });
    return undefined;
  };
  checkLeaves(obj);
  return flag;
};
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
