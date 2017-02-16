# systemjs-mock-module
A helper for mocking ES6 modules using SystemJS. This is quite useful for projects that already use
SystemJS as ES6 loader and need a simple method of module mocking and/or dependency injection.

## Usage example
A simple test setup could look like the following (imagine that `my-dependency` was a dependency of `my-module`):

```javascript
import { describe, it, beforeEach } from 'mocha';
import { assert } from 'chai';
import System from 'systemjs';
import mockModule from 'systemjs-mock-module';

describe('Some Test', () => {
  let [myModule, myMock] = [];

  beforeEach(() => {
    // create mock
    myMock = { foo: 'bar' };
    // register mock
    mockModule(System, 'my-dependency', myMock);
    // import some module that depends on the mock
    return System.import('my-module').then((m) => {
      myModule = m.default;
    }).catch(err => console.error(err));
  });

  it('should change the value of "foo"', () => {
    myModule.changeValueOfFoo('yay');
    assert.equal(myMock.foo, 'yay');
  });
});

```

## Authors
- Artemy Tregubenko
- Rico Pfaus

## License
MIT License
