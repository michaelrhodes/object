module.exports = get

function get (o, p) {
  var k = p.split('.')
  var i = 0, l = k.length
  while (i < l && o) o = o[k[i++]]
  return o
}
