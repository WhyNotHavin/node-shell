const fs = require('fs')

module.exports = function(fileArray) {
  for (let i = 1; i < fileArray.length; i++) {
    let fileName = `./${fileArray[i]}`
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        console.log(fileName);
      }
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    })
  }

}
