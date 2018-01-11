var assert = require('assert')
var pick = require('../pick')

function fn() {}
fn.a = 'foo'
fn.b = 'bar'

assert.deepEqual(pick({a: 'a', b: 'b'}, 'a'), {a: 'a'})
assert.deepEqual(pick(fn, 'a'), {a: 'foo'})
assert.deepEqual(pick({a: 'a', b: 'b', c: 'c'}, ['a', 'b']), {a: 'a', b: 'b'})
assert.deepEqual(pick({foo: 'foo', bar: 'bar', baz: 'baz'}, ['foo', 'bar']), {foo: 'foo', bar: 'bar'})
assert.deepEqual(pick({a: 'a', b: 'b', c: 'c'}, ['a', 'b', 'foo']), {a: 'a', b: 'b'})
assert.deepEqual(pick({foo: 'foo', bar: 'bar', baz: 'baz'}, ['foo', 'bar', 'abc']), {foo: 'foo', bar: 'bar'})
