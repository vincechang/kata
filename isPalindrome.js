/**
 * "Palindrome Number"
 * Determine whether an integer is a palindrome.
 * Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function isPalindrome(x) {
  return x.toString() === x.toString().split('').reverse().join('');
};

isPalindrome(1);
isPalindrome(121);
isPalindrome(123321);
isPalindrome(12345678);
