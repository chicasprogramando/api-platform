const Util = require("../utils/Utils");
const utils = new Util();

const jwt = require("jsonwebtoken");

function sign(data) {
  const token = jwt.sign(data, secret);
  return token;
}

function decodeHeader(req) {
  try {
    const authorization = req.headers.authorization || "";
    const token = getToken(authorization);
    const decoded = verifyToken(token);
    req.user = decoded;

    return decoded;
  } catch (error) {
    throw error;
  }
}

function getToken(authorization) {
  if (!authorization) throw new Error("No auth token sent");

  if (authorization.indexOf("Bearer ") === -1)
    throw new Error("Invalid token format");

  const token = authorization.replace("Bearer", "");
  return token.trim();
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

function checkJwt(req, res, next) {
  const user = req.body;
  const decoded = decodeHeader(req);
  if (decoded.sub !== user.auth_sub) {
    utils.setError(400, "Not authorized");
    return utils.send(res);
  }
  next();
}

module.exports = {
  sign,
  checkJwt
};
