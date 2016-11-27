# expect-promise

an extension to [expect](https://github.com/mjackson/expect) for testing promises.

## Installation

    $ npm install --save-dev expect-promise

## API

- `expect(promise).toBeAPromise()`
- `expect(promise).toHaveBeenResolved(done)`
- `expect(promise).toHaveBeenRejected(done)`

## Usage

```js
const expect = require('expect');
const expectPromise = require('expect-promise');

expect.extend(expectPromise);

describe('expect-promise', () => {
  it('passes when promise was resolved', done => {
    expect(Promise.resolve()).toHaveBeenResolved(done);
  });

  it('fails when resolved promise was expected to be rejected', done => {
    expect(Promise.resolve()).toHaveBeenRejected(done);
  });
});
```

**Note!** Since Promises are an asynchronous feature, `toHaveBeenResolved` and `toHaveBeenRejected` expect the `done` callback that is passed as an argument to `it`.
