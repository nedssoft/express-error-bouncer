
/**
 *
 * The Error constructor
 * @param {Number} statusCode - error code
 * @param {String} message - The error message
 * @param {Object} error - Optional object
 */
class ErrorHandler extends Error {
  constructor(statusCode, message = null, error = null) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}

/**
 *
 * A helper function that returns the formatted error response
 * @param {Object }err - error object
 * @param {Object} res - response object
 */
const handleError = (err, res) => {
  const { statusCode, message } = err;
  const code = statusCode ? statusCode : 500
  res.status(code).json({
    status: "error",
    code: code,
    message: message ? message : "Internal server error"
  });
};

/**
 *
 *
 * @param { Object } err - error
 * @param {Object } req - request
 * @param {Object } res - response
 * @param {Object } next - next function
 */
const bouncer = (err,req, res, next) => {
  handleError(err, res);
}

module.exports = {
  ErrorHandler,
  bouncer
};
