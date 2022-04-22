// Output a prompt
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')
process.stdout.write('prompt > ');

// The stdin 'data' even fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine

  let cmdArray = cmd.split(' ');

  if(cmdArray[0] === 'pwd'){
    pwd()
    process.stdout.write('\nprompt > ');
  } else if(cmdArray[0] === 'ls'){
    ls()
  } else if(cmdArray[0] === 'cat'){
    cat(cmdArray);
  } else if(cmdArray[0] === 'curl'){
    curl(cmdArray[1])
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

});

