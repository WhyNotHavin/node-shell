const request = require('request')


module.exports = function (website, done) {
    request(website, function (error, response, body) {
    done(body);
  });
}





