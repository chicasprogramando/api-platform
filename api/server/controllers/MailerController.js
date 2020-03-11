const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const Util = require("../utils/Utils");
const utils = new Util();

class MailerController {
  static async sendMail(req, res) {
    try {
      const OAuth2 = google.auth.OAuth2;

      const oauth2Client = new OAuth2(
        process.env.EMAIL_CLIENT_ID,
        process.env.EMAIL_CLIENT_SECRET,
        process.env.EMAIL_REDIRECT_URL
      );

      oauth2Client.setCredentials({ refresh_token: proces.env.EMAIL_REFRESH_TOKEN });
      const accessToken = oauth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL_USER,
          clientId: process.env.EMAIL_CLIENT_ID,
          clientSecret: process.env.EMAIL_CLIENT_SECRET,
          refreshToken: proces.env.EMAIL_REFRESH_TOKEN,
          accessToken: accessToken
        }
      });

      //const transporter = nodemailer.createTransport({
      //  service: process.env.EMAIL_SERVICE,
      //  auth: {
      //    user: process.env.EMAIL_USER,
      //    pass: process.env.EMAIL_PASS
      //  }
      //});

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `[Plataforma] ${req.body.subject}`,
        text: `User email: ${req.body.email}  \n\n  ${req.body.text}`
      };

      const result = await transporter.sendMail(mailOptions);

      if (!result.rejected.length) {
        utils.setSuccess(200, "Email sent", `${result.response} - messageId: ${result.messageId}`);
      } else {
        utils.setError(500, "Email rejected", ...result);
      }

      return utils.send(res);
    } catch (error) {
      utils.setError(500, "Error occurred", error.message);
      return utils.send(res);
    }
  }
}

module.exports = MailerController;
