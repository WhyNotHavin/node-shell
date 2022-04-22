const request = require('request')


module.exports = function (website) {
    request(website, function (error, response, body) {
    process.stdout.write(body)
  });
}





