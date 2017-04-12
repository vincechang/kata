/**
 * "Second Variation on Caesar Cipher"
 */

function encodeStr(s, shift) {
  const arr = [];
  const r = s.charAt(0).toLowerCase() +
    String.fromCharCode(s.toLowerCase().charCodeAt(0) + shift) +
    s.split('')
    .map((w) => {
      let a = w.charCodeAt(0);
      if (a >= 65 && a <= 90) {
        a = ((a + shift - 65) % 26) + 65;
      } else if (a >= 97 && a <= 122) {
        a = ((a + shift - 97) % 26) + 97;
      }
      return String.fromCharCode(a);
    })
    .join('');

  const l = Math.ceil(r.length / 5);
  for (let i = 0; i < Math.ceil(r.length / l); i += 1) {
    arr.push(r.substr(i * l, l));
  }
  return arr;
}

function decode(arr) {
  const c = arr[0].toLowerCase();
  const shift = c.charCodeAt(1) !== 130 ? c.charCodeAt(1) - c.charCodeAt(0) : 104 - c.charCodeAt(0);
  return arr.join('').substr(2).split('').map((w) => {
    let a = w.charCodeAt(0);
    if (a >= 65 && a <= 90) {
      a = ((a - shift - 65) % 26) + 65;
    } else if (a >= 97 && a <= 122) {
      a = ((a - shift - 97) % 26) + 97;
    }
    return String.fromCharCode(a);
  })
  .join('');
}
