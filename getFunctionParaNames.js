/**
 * "How to Get Function Parameter Names?"
 * How to access the argument's name
 * (in this case: name, userId, phone, address) 
 * without changing the foo object.
 */

const foo = {
  sayNone: () => {
    console.log(arguments);
  },
  sayOne: (name) => {
    console.log(arguments);
  },
  sayThree: (userId, phone, address) => {
    console.log(arguments);
  }
};

const getParamNames = function getParamNames(func) {
  const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  const ARGUMENT_NAMES = /([^\s,]+)/g;
  const fnStr = func.toString().replace(STRIP_COMMENTS, '');
  const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  return result === null ? [] : result;
};

const demo = function demo() {
  console.clear();
  foo.sayNone();
  foo.sayOne('John');
  foo.sayThree('A123', 0912, 'Taipei');
  console.log(getParamNames(foo.sayNone));
  console.log(getParamNames(foo.sayOne));
  console.log(getParamNames(foo.sayThree));
};

demo();
