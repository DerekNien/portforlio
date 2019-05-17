const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

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
