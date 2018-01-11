var has = {}.hasOwnProperty

module.exports = mutate

function mutate (o1) {
  var k, on, i = 1, l = arguments.length
  while (on = arguments[i], i++ < l)
    for (k in on) if (has.call(on, k))
      o1[k] = on[k]
  return o1
}
