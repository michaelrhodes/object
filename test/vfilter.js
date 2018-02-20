var assert = require('assert')
var vfilter = require('../vfilter')

var a = {
  foo: 'bar',
  baz: 'foo'
}

var b = vfilter(a, function (v) {
  return v === 'bar'
})

assert.deepEqual(b, {
  foo: 'bar'
})
