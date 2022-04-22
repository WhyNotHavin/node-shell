const fs = require('fs')


module.exports = function (array, done){
  let empty = []
  for(let i = 1; i<array.length-2; i++){
    empty.push(array[i])
  }
  let content = empty.join(' ')
  content = content.slice(1, content.length-1)

  fs.writeFile(array[array.length-1], content, (err) => {
    if (err){
      throw err
    } else (done(''))
  })
}
