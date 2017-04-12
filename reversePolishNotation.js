/**
 * "Reverse Polish Notation Calculator"
 * Write a calculator which evaluates expressions in Reverse Polish notation.
 * Reference: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function reversePolishNotation(expr) {
  if (expr === '') {
    return 0;
  }
  let i;
  let r;
  let exprAry = expr.split(' ');
  for (i = 2; i < exprAry.length; i += 1) {
    if (exprAry[i] === '+' || exprAry[i] === '-' || exprAry[i] ===
      '*' || exprAry[i] === '/') {
      switch (exprAry[i]) {
        case '+':
          r = +exprAry[i - 2] + +exprAry[i - 1];
          break;
        case '-':
          r = +exprAry[i - 2] - +exprAry[i - 1];
          break;
        case '*':
          r = +exprAry[i - 2] * +exprAry[i - 1];
          break;
        case '/':
          r = +exprAry[i - 2] / +exprAry[i - 1];
          break;
        default:
          break;
      }
      exprAry = i > 2 ?
        exprAry.slice(0, i - 2).concat([r]).concat(exprAry.slice(
          i + 1)) : [r].concat(exprAry.slice(i + 1));
      i = 1;
    }
  }
  return +exprAry[exprAry.length - 1];
}
