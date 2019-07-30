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

verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if(err) {
      res
        .status(401)
        .json(err)
    }
    else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

module.exports = {
  generateToken,
  verifyToken
};
