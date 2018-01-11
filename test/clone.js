var assert = require('assert')
var clone = require('../clone')
var a, b

a = { a: 1, b: 2 }
b = clone(a)
assert.notEqual(a, b)
assert.deepEqual(a, b)
