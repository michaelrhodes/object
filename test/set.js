var assert = require('assert')
var clone = require('../clone')
var set = require('../set')

var obj = {
  a: {
    b: { z: 12 },
    c: { d: 'foo' }
  },
  d: {
    e: false,
    f: [1]
  }
}

function check (path, value, expected) {
  var out = set(clone(obj), path, value)
  assert.strictEqual(out, expected)
}

check('a.b.name', 'Jorge', 'Jorge')
check('a.d.name', 'Jorge', void 0)
check('d.f.2', 2, 2)
check('a.b.z', 100, 100)
check('a.c.d', 'bar', 'bar')
check('d.e', true, true)
