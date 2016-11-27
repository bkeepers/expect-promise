const assert = require('expect').assert;

module.exports = {
  toBeAPromise() {
    assert(this.actual && this.actual.then, 'expected %s to be a promise', this.actual);
    return this;
  },

  toHaveBeenResolved(done) {
    this.toBeAPromise();
    assert(typeof done === 'function', 'toHaveBeenResolved must be called with a callback');

    this.actual.then(() => {
      done();
    }, () => {
      done(new Error('expected promise to have been resolved'));
    });

    return this;
  },

  toHaveBeenRejected(done) {
    this.toBeAPromise();
    assert(typeof done === 'function', 'toHaveBeenRejected must be called with a callback');

    this.actual.then(() => {
      done(new Error('expected promise to have been rejected'));
    }, () => {
      done();
    });

    return this;
  }
};
