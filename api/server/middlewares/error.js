const Util = require("../utils/Utils");
const utils = new Util();

function error(err, req, res, next) {
    console.error('[error]', err)

    const message = err.message || 'Internal server error'
    const status = err.status || 500

    utils.setError(status, message);
    return utils.send(res);

}

module.exports = error