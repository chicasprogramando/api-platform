const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

/** checkJwt
 * Checks if the user's Access Token included in the request is valid.
 * 
 * If the token is not valid, the user gets a 401 Authorization error
 * when trying to access the endpoints.
 * 
 * The middleware doesn't check if the token has the sufficient scope
 * to access the requested resources.
 */
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWT_URI
  }),

  audience: process.env.JWT_AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  algorithms: [process.env.JWT_ALGO]
});


module.exports = checkJwt