/**
 * "Find the Parity Outlier"
 * You are given an array (which will have a length of at least 3,
 * but could be very large) containing integers.
 * The array is either entirely comprised of odd integers
 * or entirely comprised of even integers except for a single integer N.
 * Write a method that takes the array as an argument and returns N.
 */

/**
 * @param {*} integers
 */
function findOutlier(integers) {
  const even = integers.filter(int => int % 2 === 0);
  const odd = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

// return 11
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);

// return 160
findOutlier([160, 3, 1719, 19, 11, 13, -21]);
