/**
 * "Valid Braces"
 * Write a function called validBraces that takes a string of braces,
 * and determines if the order of the braces is valid.
 * validBraces should return true if the string is valid,
 * and false if it's invalid.
 * 
 * All input strings will be nonempty,
 * and will only consist of open parentheses '(' , closed parentheses ')',
 * open brackets '[', closed brackets ']',
 * open curly braces '{' and closed curly braces '}'.
 */

function validBraces(b) {
  let replaced;
  let braces = b;
  while (braces.length !== 0) {
    replaced = braces.replace(/\(\)|\[\]|\{\}/, '');
    if (replaced === braces) {
      return false;
    }
    braces = replaced;
  }
  return true;
}

// returns true
validBraces('(){}[]');

// returns false
validBraces('(}');

// returns false
validBraces('[(])');

// returns true
validBraces('([{}])');
