module.exports = each

function each (o, fn) {
  var k = Object.keys(o)
  var i = 0, l = k.length
  for (; i < l; i++) fn(k[i], o[k[i]])
}
