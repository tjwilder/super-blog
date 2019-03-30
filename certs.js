const fs = require('fs');
const certLocation = process.env.HTTPS_DIR || '.'

module.exports = {
  key: fs.readFileSync(certLocation + '/privkey.pem'),
  cert: fs.readFileSync(certLocation + '/fullchain.pem')
};
