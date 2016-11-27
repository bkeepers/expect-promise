const expect = require('expect');
const expectPromise = require('../index');

expect.extend(expectPromise);

describe('expect-promise', () => {
  describe('toHaveBeenResolved', () => {
    it('passes when promise was resolved', done => {
      expect(Promise.resolve()).toHaveBeenResolved(done);
    });

    it('fails when promise was rejected', done => {
      expect(Promise.reject()).toHaveBeenResolved(error => {
        expect(error.message).toMatch(/expected promise to have been resolved/);
        done();
      });
    });

    it('fails when not a promise', () => {
      expect(() => {
        expect('not a promise').toHaveBeenResolved();
      }).toThrow(/expected 'not a promise' to be a promise/);
    });

    it('fails when not called with a callback', () => {
      expect(() => {
        expect(Promise.resolve()).toHaveBeenResolved();
      }).toThrow(/must be called with a callback/);
    });
  });

  describe('toHaveBeenRejected', () => {
    it('passes when promise was rejected', done => {
      expect(Promise.reject()).toHaveBeenRejected(done);
    });

    it('fails when promise was resolved', done => {
      expect(Promise.resolve()).toHaveBeenRejected(error => {
        expect(error.message).toMatch(/expected promise to have been rejected/);
        done();
      });
    });

    it('fails when not a promise', () => {
      expect(() => {
        expect('not a promise').toHaveBeenRejected();
      }).toThrow(/expected 'not a promise' to be a promise/);
    });

    it('fails when not called with a callback', () => {
      expect(() => {
        expect(Promise.resolve()).toHaveBeenRejected();
      }).toThrow(/must be called with a callback/);
    });
  });
});
