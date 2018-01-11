var assert = require('assert')
var omit = require('../omit')

var obj = {a: 'a', b: 'b', c: 'c'}

assert.deepEqual(omit({a: 'a', b: 'b', c: 'c'}, 'a'), { b: 'b', c: 'c' })
assert.deepEqual(omit({aaa: 'a', bbb: 'b', ccc: 'c'}, 'aaa'), { bbb: 'b', ccc: 'c' })
assert.deepEqual(omit({a: 'a', b: 'b', c: 'c'}, ['a', 'c']), { b: 'b' })
assert.deepEqual(omit({a: 'a', b: 'b', c: 'c'}), {a: 'a', b: 'b', c: 'c'})
assert(omit(obj) !== obj)
