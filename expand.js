module.exports = expand

function expand (oo, o) {
  if (!o) o = oo, oo = {}
  var k = Object.keys(o)
  var i = 0, l = k.length
  var j, m, sk, so
  for (; i < l; i++) {
    so = oo
    sk = k[i].split('.')
    j = 0, m = sk.length - 1
    for (; j < m; j++)
      so = so[sk[j]] = so[sk[j]] || {}
    so[sk[j++]] = o[k[i]]
  }
  return oo
}
