const admin = require("firebase-admin");
const FIREBASE_CONFIG = JSON.parse(process.env.FIREBASE_CONFIG);

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(FIREBASE_CONFIG),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}
