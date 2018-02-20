var assert = require('assert')
var kmap = require('../kmap')

var a = {
  foo: 'bar',
  baz: 'foo'
}

var b = kmap(a, function (k) {
  return k + 'mapped'
})

assert.deepEqual(b, {
  foomapped: 'bar',
  bazmapped: 'foo'
})
