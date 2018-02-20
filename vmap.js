module.exports = vmap

function vmap (o, fn) {
  var oo = {}
  var k = Object.keys(o)
  var i = 0, l = k.length
  for (; i < l; i++)
    oo[k[i]] = fn(o[k[i]], k[i])
  return oo
}
