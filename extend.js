var has = {}.hasOwnProperty

module.exports = extend

function extend () {
  var k, on, oo = {}
  var i = 0, l = arguments.length
  while (on = arguments[i], i++ < l)
    for (k in on) if (has.call(on, k))
      oo[k] = on[k]
  return oo
}
