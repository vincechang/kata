/**
 * "Is a Number Prime?"
 * Define a function isPrime that takes one integer argument
 * and returns true or false depending on if the integer is a prime.
 */

/**
 * @param {*} num
 */
function isPrime(num) {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num >= 2;
}
