/**
 * "Merged String Checker"
 * write an algorithm to check if a given string,
 * s, can be formed from two other strings, part1 and part2.
 * The restriction is that the characters in part1 and part2 are in the same order as in s.
 */

function isSub(s, part) {
  let i;
  let j = 0;
  if (part.length === 0) {
    return true;
  }
  for (i = 0; i < s.length; i += 1) {
    if (s.charAt(i) === part.charAt(j)) {
      j += 1;
      if (j === part.length) {
        return true;
      }
    }
  }
  return false;
}

function isMergedString(s, part1, part2) {
  const sAry = s.split('');
  const tAry = part1.concat(part2).split('');
  return isSub(s, part1) &&
    isSub(s, part2) &&
    (sAry.sort().toString() === tAry.sort().toString());
}
