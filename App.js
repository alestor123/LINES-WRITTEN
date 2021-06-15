const { readFileSync, readdirSync, statSync } = require('fs')
const { join, extname } = require('path')
const files = []
module.exports = path => {
  let lines = 0
  filesDir(path).forEach(fl => {
    if (extname(fl) === '.js') lines += readFileSync(fl).toString().replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, '').split('\n').length
  }
  )
  return lines
}
function filesDir (dir) {
  readdirSync(dir).forEach(file => {
    const inn = join(dir, file)
    if (statSync(inn).isDirectory()) return filesDir(inn)
    else return files.push(inn)
  })
  return files
}
