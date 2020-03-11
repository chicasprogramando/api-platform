const nodemailer = require("nodemailer");
const Util = require("../utils/Utils");
const utils = new Util();

class MailerController {
  static async sendMail(req, res) {
    try {
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

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
        utils.setError(500, `Error rejected - result - ${result}`);
      }

      return utils.send(res);
    } catch (error) {
      utils.setError(500, `Error occurred - ${error.message}`);
      return utils.send(res);
    }
  }
}

module.exports = MailerController;
