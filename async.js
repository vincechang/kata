/**
 * "A Simple Demostration of Async"
 * For more information about Async,
 * please visit this website:
 * https://github.com/caolan/async
 */

import async from 'async-es';

/**
 * Send an async request,
 * then do something when the request is done.
 */
const yourAction = function yourAction() {
  async.waterfall([
    asyncOpt,
    doSomething
  ]);
};

/**
 * The code legacy here,
 * simply add next() as a parameter to asyncOpt().
 */
const asyncOpt = function asyncOpt(next) {
  setTimeout(() => {
    console.log('1. async operation succeeded');
    next();
  }, 500);
};

const doSomething = function doSomething() {
  console.log('2. do something after async operation succeeded');
};

yourAction();
