module.exports = nulled

function nulled (o) {
  var oo = {}
  var k = Object.keys(o)
  var i = 0, l = k.length
  for (; i < l; i++) oo[k[i]] = null
  return oo
}
