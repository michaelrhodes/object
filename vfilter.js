module.exports = vfilter

function vfilter (o, fn) {
  var oo = {}
  var k = Object.keys(o)
  var i = 0, l = k.length
  for (; i < l; i++)
    if (fn(o[k[i]], k[i]))
      oo[k[i]] = o[k[i]]
  return oo
}
