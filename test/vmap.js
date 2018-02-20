var assert = require('assert')
var vmap = require('../vmap')

var a = {
  foo: 'bar',
  baz: 'foo'
}

var b = vmap(a, function (v) {
  return v + 'mapped'
})

assert.deepEqual(b, {
  foo: 'barmapped',
  baz: 'foomapped'
})
