module.exports = kfilter

function kfilter (o, fn) {
  var oo = {}
  var k = Object.keys(o)
  var i = 0, l = k.length
  for (; i < l; i++)
    if (fn(k[i], o[k[i]]))
      oo[k[i]] = o[k[i]]
  return oo
}
