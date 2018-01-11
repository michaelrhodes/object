var has = {}.hasOwnProperty

module.exports = pick

function pick (oi, ls) {
  var oo = {}
  var k, keys = [].concat(ls)
  var i = 0, l = keys.length
  while (k = keys[i], i++ < l)
    if (has.call(oi, k))
      oo[k] = oi[k]
  return oo
}
