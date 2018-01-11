var assign = Object.assign
var create = Object.create

module.exports = clone

function clone (o) {
  return assign(create(null), o)
}
