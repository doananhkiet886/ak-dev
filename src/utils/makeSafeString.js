const ejs = require('ejs')

const makeSafeString = (string) => {
  let safeString = ejs.render(`<%% ${string} %>`)
  safeString = safeString.slice(2, safeString.length - 2).trim()
  return safeString
}

module.exports = makeSafeString