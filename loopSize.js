/**
 * You are given a node that is the beginning of a linked list.
 * This list always contains a tail and a loop.
 * Your objective is to determine the length of the loop.
 */

function loopSize(node) {
  const header = node;
  let n = 0;
  let lastTrack;
  const leaveNoTrack = function (n) {
    while (typeof n.track !== 'undefined') {
      delete n.track;
      n = n.next;
    }
  };

  while (typeof node.track === 'undefined') {
    node.track = n;
    lastTrack = n;
    n += 1;
    node = node.next;
  }
  const result = (lastTrack - node.track) + 1;
  leaveNoTrack(header);
  return result;
}
