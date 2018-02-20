var assert = require('assert')
var kfilter = require('../kfilter')

var a = {
  foo: 'bar',
  baz: 'foo'
}

var b = kfilter(a, function (k) {
  return k === 'foo'
})

assert.deepEqual(b, {
  foo: 'bar'
})
