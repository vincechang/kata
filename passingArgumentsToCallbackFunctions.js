/**
 * Passing Arguments to Callback Functions
 */

// With ES6 binding.
const B = function (callback, s) {
  console.log(`B: ${s}`);
  setTimeout(callback.bind(this, s), 1000);
};

const A = function (str) {
  console.log(`A: ${str}`);
};

B(A, 'Foo');

// With closure.
const D = function (callback, s) {
  console.log(`D: ${s}`);
  setTimeout(callback(s), 1000);
};

const C = function (str) {
  console.log(`Closure: ${str}`);
  return function () {
    console.log(`C: ${str}`);
  };
};

D(C, 'Bar');
