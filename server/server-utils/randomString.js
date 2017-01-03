const crypto = require('crypto');

function randomString(num) {
  return new Promise( (resolve, reject) => {
    crypto.randomBytes(num, (err, buffer) => {
      if(err) { 
      	return reject(err); 
      }
      resolve(buffer.toString('hex'))
    })
  });
}

module.exports = randomString;