'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let total = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const result = total;

      total = 0;

      return result;
    }

    total += args.reduce((acc, n) => acc + n, 0);

    return adder;
  };
}

module.exports = makeInfinityAdder;
