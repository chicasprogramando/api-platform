const logger = require("./logger");
class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = "success";
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = "error";
  }

  send(res) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data
    };

    if (this.type === "success") {
      // We need a copy of result because logger modifies the original adding extra info
      // that we don't want to send back in the response
      logger.info(Object.assign({},result));
      return res.status(this.statusCode).json(result);
    }

    logger.error(Object.assign({}, result));
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message
    });
  }
}

module.exports = Util;
