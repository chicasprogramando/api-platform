const firebase = require("firebase-admin");
const Util = require("../utils/Utils");
const utils = new Util();

async function decodeHeader(req) {
  try {
    const authorization = req.headers.authorization || "";
    const token = getToken(authorization);
    const decoded = await verifyToken(token);

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

async function verifyToken(token) {
  try {
    const firebaseUser = await firebase.auth().verifyIdToken(token);
    return firebaseUser;
  } catch (error) {
    throw new Error("Can't verify Id Token");
  }
}

const checkJwt = async (req, res, next) => {
  if (process.env.NODE_ENV !== "testing") {
    try {
      const { firebase_id } = req.body;
      const decoded = await decodeHeader(req, res);
      if (decoded.user_id !== firebase_id) {
        utils.setError(401, "Not authorized");
        return utils.send(res);
      } else {
        next();
      }
    } catch (error) {
      utils.setError(401, error.message);
      return utils.send(res);
    }
  }
};

module.exports = checkJwt;
