// WIP
const jwtAuthz = require('express-jwt-authz');

const checkScopes = jwtAuthz([ 'read:messages' ]);

module.exports = checkScopes