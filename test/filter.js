var assert = require('assert')
var filter = require('../filter')

var a = {
  foo: 'bar',
  baz: 'foo'
}

var b = filter(a, function (k, v) {
  return k === 'foo'
})

var c = filter(a, function (k, v) {
  return v === 'foo'
})

assert.deepEqual(b, {
  foo: 'bar'
})

assert.deepEqual(c, {
  baz: 'foo'
})
