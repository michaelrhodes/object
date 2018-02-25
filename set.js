module.exports = set

function set (o, p, v) {
  var k = p.split('.')
  var i = 0, l = k.length - 1
  while (i < l && o) o = o[k[i++]]
  return o === void 0 ? o : o[k[l]] = v
}
