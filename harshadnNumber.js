/**
 * "Harshad or Niven Numbers"
 * Utility class for Harshad numbers (also called Niven numbers).
 * For example, the following numbers are Harshad numbers:
 * 10, because 1 + 0 = 1 and 10 equals 1 * 10
 * 27, because 2 + 7 = 9 and 27 equals 9 * 3
 * 588, because 5 + 8 + 8 = 21 and 588 equals 21 * 28
 * While those numbers are not:
 * 19, because 1 + 9 = 10 and 19 is not divisible by 10
 * 589, because 5 + 8 + 9 = 22 and 589 is not divisible by 22
 * 1001, because 1 + 1 = 2 and 1001 is not divisible by 2
 * Reference: https://en.wikipedia.org/wiki/Harshad_number
 */

/**
 * @namespace Harshad
 */
const Harshad = (function () {
  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: (number) => {
      let i;
      let sum = 0;
      for (i = 0; i < number.toString().length; i += 1) {
        sum += +(number.toString().charAt(i));
      }

      return number % sum === 0;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: (number) => {
      let counter = number;
      do {
        counter = number + 1;
      } while (!this.isValid(number));
      return counter;
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: (count, start) => {
      let c = count;
      let s = start;
      let current;
      const serie = [];
      if (typeof s === 'undefined') {
        s = 0;
      }
      current = start;
      while (c) {
        current = this.getNext(current);
        serie.push(current);
        c -= 1;
      }
      return serie;
    },
  };
}());
