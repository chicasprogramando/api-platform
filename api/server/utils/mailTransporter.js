const { google } = require("googleapis");
const nodemailer = require("nodemailer");

function newTransporter() {
  
  const OAuth2 = google.auth.OAuth2;

  const oauth2Client = new OAuth2(
    process.env.EMAIL_CLIENT_ID,
    process.env.EMAIL_CLIENT_SECRET,
    process.env.EMAIL_REDIRECT_URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.EMAIL_REFRESH_TOKEN
  });

  const accessToken = oauth2Client.getAccessToken();

  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.EMAIL_CLIENT_ID,
      clientSecret: process.env.EMAIL_CLIENT_SECRET,
      refreshToken: process.env.EMAIL_REFRESH_TOKEN,
      accessToken: accessToken
    }
  });
}

module.exports = newTransporter;
