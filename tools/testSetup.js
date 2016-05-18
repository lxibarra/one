
//allows tests to be written with es6.
require('babel-register')();

function noop() {
  return null;
}

require.extensions['.scss'] = noop;
