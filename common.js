var x = module.exports = {}
x.randomString = randomString

function randomString () {
  return Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2) +
    Math.random().toString(36).slice(2)
}
