/**
 * "Counting Change Combinations"
 * Write a function that counts how many different ways
 * you can make change for an amount of money,
 * given an array of coin denominations.
 */

function countChange(money, coins) {
  let i;
  let j;
  const dpt = []; // Dynamic programming table

  for (i = money + 1; i -= 1;) {
    dpt[i] = [];
    for (j = coins.length; j -= 1;) {
      dpt[i][j] = -1;
    }
  }
  const change = function change(money, n) {
    if (n < 0 || money < 0) return 0;
    if (money === 0) return 1;
    if (dpt[money][n] !== -1) return dpt[money][n];
    dpt[money][n] = change(money, n - 1) + change(money - coins[n], n);
    return dpt[money][n];
  };
  return change(money, coins.length - 1);
}

// return 3
countChange(4, [1, 2]);

// return 4
countChange(10, [5, 2, 3]);

// return 0
countChange(11, [5, 7]);
