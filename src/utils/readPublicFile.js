const fs = require('fs')
const path = require('path')

const publicPath = './src/public'

const readPublicFile = (filePath = '') => {
  filePath = path.join(publicPath, filePath)
  try {
    const fileBuffer = fs.readFileSync(filePath)
    return fileBuffer
  } catch (error) {
    console.log(error)
  }
}

module.exports = readPublicFile
