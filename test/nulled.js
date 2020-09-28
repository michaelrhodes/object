var assert = require('assert')
var nulled = require('../nulled')

var a = {
  name: { type: 'string' },
  human: { type: 'boolean' },
  likes: { type: 'array' }
}

var b = {
  a: 1,
  b: 'two',
  c: { value: 'III' },
  d: function () { return 4 },
  e: ['five', 6, 'VII']
}

assert.deepEqual(nulled(a), {
  name: null,
  human: null,
  likes: null
})

assert.deepEqual(nulled(b), {
  a: null,
  b: null,
  c: null,
  d: null,
  e: null
})
