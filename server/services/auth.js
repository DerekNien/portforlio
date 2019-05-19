const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

// Middleware
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dereknien.auth0.com/.well-known/jwks.json',
  }),
  audience: 'DfykSU0Su0NyJjJ5FfPZ4Y8yJbh7HHp5',
  issuer: 'https://dereknien.auth0.com/',
  algorithms: ['RS256'],
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[namespace + 'role'] === role) {
    next();
  } else {
    return res.status(401).send({
      title: 'Not authorized',
      detail: 'You are not authroized to access this data',
    });
  }
};
