var assert = require('assert')
var each = require('../each')
var has = {}.hasOwnProperty

var a = {
  foo: 'bar',
  baz: 'foo'
}

each(a, function (k, v) {
  assert.ok(has.call(a, k))
  assert.equal(a[k], v)
})
