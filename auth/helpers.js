const jwt = require('jsonwebtoken');
const secrets = require('../secrets/jwtSecrets');

const generateToken = user => {
  const payload = {
    subject: user.id,
    email: user.email,
    roles: user.roles
  };
  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = {
  generateToken,
};
