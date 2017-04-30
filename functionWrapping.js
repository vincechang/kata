function wrap(object, method, wrapper) {
  const fn = object[method];

  const objectMethod = function objectMethod(...args) {
    console.log(Array.isArray(args));
    const what = [fn.bind(this)].concat(args);
    console.log(`What is ${what}`);
    return wrapper.apply(this, what);
  };

  return objectMethod;
}

const Element = {};

Element.method = function method(a, b) {
  console.log(`Original method: ${a}, ${b}`);
};

const newMethod = function newMethod(original, a, b) {
  console.log('Wrapper.');
  original(a, b);
};

Element.method = wrap(Element, 'method', newMethod);

Element.method(2, 3);
