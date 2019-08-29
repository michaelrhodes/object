module.exports = id

function id (o) {
  if (o && Array.isArray(o)) return '[' +
    o.map(id).join(',') +
  ']'

  if (o && typeof o === 'object') return '{' +
    Object.keys(o).sort()
      .map(function (k) { return k + ':' + id(o[k]) })
      .join(',') +
  '}'

  return '' + o
}
