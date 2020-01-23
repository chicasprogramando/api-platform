const nodemailer = require("nodemailer");
const Util = require("../utils/Utils");
const utils = new Util();

class MailerController {
  static async sendMail(req, res) {
    try {
      // async..await is not allowed in global scope, must use a wrapper

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        // service: "Gmail"

        host: "smtp.mailtrap.io", //mailtrap for testing emails
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "177492dc46bc2c", //mailtrap user
          pass: "def90a4fcefb88"
        }
      });
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Plataforma" <thisIsNeeded>', // sender address
        to: "inveniahadouken@gmail.com", // list of receivers
        subject: req.body.subject, // Subject line
        text: "esto es text", // plain text body
        html: "<b>Hello world?</b>" // html body
      });

      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      utils.setError(500, "todo mal", error.message);
      return utils.send(res);
    }
    utils.setSuccess(200, "todo pioli", []);
    return utils.send(res);
  }
}

module.exports = MailerController;
