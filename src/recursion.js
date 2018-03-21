// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  const myFib = [1, 1, 2];
  for (let i; myFib.length < n + 1; i + myFib[i++]) {
    i = myFib[myFib.length - 1] + myFib[myFib.length - 2];
    myFib.push(i);
  }
  return myFib[--n];
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === undefined) n = 1;
  if (n === 1) return n;
  return n * nFactorial(--n);
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
