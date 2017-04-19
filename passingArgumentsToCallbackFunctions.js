/**
 * Passing Arguments to Callback Functions
 */

const B = function (callback, s) {
  console.log(`B: ${s}`);
  setTimeout(callback.bind(this, s), 1000);
};

const A = function (str) {
  console.log(`A: ${str}`);
};

B(A, 'Ha');
