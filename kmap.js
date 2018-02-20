module.exports = kmap

function kmap (o, fn) {
  var oo = {}
  var k = Object.keys(o)
  var i = 0, l = k.length
  for (; i < l; i++)
    oo[fn(k[i], o[k[i]])] = o[k[i]]
  return oo
}
