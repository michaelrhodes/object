var assert = require('assert')
var get = require('../get')

var obj = {
  undef: void 0,
  zero: 0,
  one: 1,
  n: null,
  a: {
    two: 2,
    b: {
      three: 3,
      c: { four: 4 }
    }
  }
}

function check (path, value) {
  assert.strictEqual(get(obj, path), value)
}

check('', void 0)
check('one', obj.one)
check('one.two', void 0)
check('a', obj.a)
check('a.two', obj.a.two)
check('a.b', obj.a.b)
check('a.b.three', obj.a.b.three)
check('a.b.c', obj.a.b.c)
check('a.b.c.four', obj.a.b.c.four)
