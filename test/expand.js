var assert = require('assert')
var expand = require('../expand')

assert.deepEqual(expand({ 'a.b.name': 'Jorge' }), { a: { b: { name: 'Jorge' }}})
assert.deepEqual(expand({ 'a.b.name': 'Jorge', 'a.b.age': 42 }), { a: { b: { name: 'Jorge', age: 42 }}})
assert.deepEqual(expand({ name: 'Jorge' }), { name: 'Jorge' })
assert.deepEqual(expand({ name: 'Jorge', loc: { lat: 0, lng: 0 } }, { 'loc.lat': 18 }), { name: 'Jorge', loc: { lat: 18, lng: 0 } })
