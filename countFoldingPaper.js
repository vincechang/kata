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

const theOrder = readline().split('');
const theSide = readline();

/**
 * Same side: this side = 1
 * Opposite side: this side + opposide side
 * Flank side: this side * 2
 */
function countfoldingPaper(order, side) {
  const paper = {
    U: 1,
    D: 1,
    L: 1,
    R: 1,
  };

  const map = {
    U: ['U', 'D', 'L', 'R'],
    D: ['D', 'U', 'L', 'R'],
    L: ['L', 'R', 'U', 'D'],
    R: ['R', 'L', 'U', 'D'],
  };

  let a;
  let b;
  let c;
  let d;

  let s;

  for (let i = 0; i < order.length; i += 1) {
    s = order[i];
    [a, b, c, d] = map[s];
    paper[b] += paper[a];
    paper[a] = 1;
    paper[c] += paper[c];
    paper[d] += paper[d];
  }
  return paper[side];
}

print(countfoldingPaper(theOrder, theSide));
