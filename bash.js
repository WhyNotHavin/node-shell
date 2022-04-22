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

  const done = (output) => {
    // show the output
    process.stdout.write(output);
    // show the prompt
    process.stdout.write('\nprompt > ');
  }

  if(cmdArray[0] === 'pwd'){
    pwd(done)
  } else if(cmdArray[0] === 'ls'){
    ls(done)
  } else if(cmdArray[0] === 'cat'){
    cat(cmdArray, done);
  } else if(cmdArray[0] === 'curl'){
    curl(cmdArray[1], done)
  }
  else {
    done('You typed: ' + cmd);
  }

});

