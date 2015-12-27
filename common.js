var x = module.exports = {}
x.randomString = randomString
x.cleanPath = cleanPath

function randomString () {
  return Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2)
}

function cleanPath(path, base) {
  if (!path) return ''
  if (!base) return path

  if (base[base.length-1] != '/') {
    base += "/"
  }

  var parts = base.split('/')
  var smallBase = parts.slice(0, parts.length - 2).join('/') + '/'

  // remove base from path
  path = path.replace(smallBase, '')
  path = path.replace(/[\/]+/g, '/')
  return path
}
