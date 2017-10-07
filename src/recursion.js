// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) {
    return n;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
    // Flattens a nested array (the nesting can be to any depth).
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  //   const temp = [];
  //   elements.forEach((val) => {
  //     if (typeof obj[val] === 'object' && !Array.isArray(obj[val]) && obj[val] !== null) {
  //       temp.push(...flatten(Object.keys(obj[val])));
  //     } else {
  //       temp.push(obj[val]);
  //     }
  //   });
  //   return temp;
  // };

  const flatten = (object) => {
    const elements = Object.keys(object);
    const flattenedArr = elements.reduce((memo, item) => {
      if (typeof object[item] === 'object') {
        return memo.concat(flatten(object[item]));
      }
      return memo.concat(object[item]);
    }, []);
    return flattenedArr;
  };

  const temp = flatten(obj);

  for (let i = 0; i < temp.length - 1; i++) {
    if (temp[i] !== temp[i + 1]) return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
