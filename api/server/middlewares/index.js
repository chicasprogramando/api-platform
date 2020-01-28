const checkJwt = require("./secure")
const checkScopes = require("./checkScopes")
const error = require("./error")

module.exports = {
    checkJwt,
    checkScopes,
    error
}