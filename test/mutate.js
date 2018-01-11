var assert = require('assert')
var mutate = require('../mutate')
var a, b

var a = { foo: 'bar' }
mutate(a, { bar: 'baz' })
assert.equal(a.bar, 'baz')

var a = { foo: 'bar' }
var b = Object.create(null)
b.bar = 'baz'
mutate(a, b)
assert.equal(a.bar, 'baz')
