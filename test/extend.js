var assert = require('assert')
var extend = require('../extend')
var a, b, c

a = { a: 'foo' }
b = { b: 'bar' }
assert.deepEqual(extend(a, b), { a: 'foo', b: 'bar' })

a = { a: 'foo' }
b = { a: 'bar' }
assert.deepEqual(extend(a, b), { a: 'bar' })

a = { a: undefined }
b = { b: 'foo' }
assert.deepEqual(extend(a, b), { a: undefined, b: 'foo' })
assert.deepEqual(extend(b, a), { a: undefined, b: 'foo' })

a = { a: 'default' }
b = { a: 0 }
assert.deepEqual(extend(a, b), { a: 0 })
assert.deepEqual(extend(b, a), { a: 'default' })

c = {}
extend(c, { foo: 'bar' })
assert.equal(c.foo, undefined)

a = { foo: 'bar' }
b = null
c = void 0
assert.deepEqual(extend(b, a, c), { foo: 'bar' })
