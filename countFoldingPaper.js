/**
 * A sheet of paper is folded several times.
 * The goal is to determine how many layers of paper
 * are visible from one side of the obtained folding.
 * Folding motions are:
 * R for Right: take the right side and fold it on the left side.
 * L for Left: take the left side and fold it on the right side.
 * U for Up: take the high side and fold it on the low side.
 * D for Down: take the low side and fold it on the high side.
 * 2 characters ≤ length of order ≤ 8 characters
 */

const order = readline();
const side = readline();

function getOppoSide(sideStr) {
  const oppoSideOf = {
    U: 'D',
    D: 'U',
    L: 'R',
    R: 'L',
  };
  return oppoSideOf[sideStr];
}

/**
 * Same side: this side = 1
 * Opposite side: this side + opposide side
 * Flank side: this side * 2
 */
function getLayersFromOndeSide(input, thisSideStr, thisSideCount, oppoSideCount) {
  /**
   * Why?
  const samesideOrOppositeCount = input === sideStr ? 1 : thisSideCount + oppoSideCount;
  const oppositeStr = getOppoSide(sideStr);
  const result = input === oppositeStr ? samesideOrOppositeCount : thisSideCount * 2;
  */
  const oppositeStr = getOppoSide(thisSideStr);
  let result;

  switch (input) {
    case thisSideStr:
      result = 1;
      break;
    case oppositeStr:
      result = thisSideCount + oppoSideCount;
      break;
    default:
      result = thisSideCount * 2;
      break;
  }
  return result;
}

function countfoldingPaper(orderStr, sideStr) {
  const result = {
    U: 1,
    D: 1,
    L: 1,
    R: 1,
  };

  let U;
  let D;
  let L;
  let R;

  for (let i = 0; i < orderStr.length; i += 1) {
    [U, D, L, R] = [result.U, result.D, result.L, result.R];

    // count U
    result.U = getLayersFromOndeSide(orderStr[i], 'U', U, D);

    // count D
    result.D = getLayersFromOndeSide(orderStr[i], 'D', D, U);

    // count L
    result.L = getLayersFromOndeSide(orderStr[i], 'L', L, R);

    // count R
    result.R = getLayersFromOndeSide(orderStr[i], 'R', R, L);
  }
  return result[sideStr];
}

console.log(countfoldingPaper(order, side));
