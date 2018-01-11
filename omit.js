var has = {}.hasOwnProperty

module.exports = omit

function omit (oi, ls) {
  var oo = {}
  var k, keys = [].concat(ls)
  for (k in oi)
    if (has.call(oi, k) && !~keys.indexOf(k))
      oo[k] = oi[k]
  return oo
}
