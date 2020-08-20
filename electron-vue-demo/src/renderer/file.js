const fs = require('fs')

exports.writeFile = function() {
  fs.writeFileSync('C:\\shot\\test.txt', Buffer.from('hello world'))
}
