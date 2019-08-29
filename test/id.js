var assert = require('assert')
var id = require('../id')

var a = {
  a: [1, 2],
  b: { c: 'd', e: /f/g }
}

var b = {
  b: { e: /f/g, c: 'd' },
  a: [1, 2]
}

assert.equal(id(a), id(b))
