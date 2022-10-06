const { INTERNAL_SERVER_ERROR, DEFAULT_ERROR_MESSAGE } = require('../constants');

module.exports = (err, req, res, next) => {
  const { statusCode = INTERNAL_SERVER_ERROR, message = DEFAULT_ERROR_MESSAGE } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === INTERNAL_SERVER_ERROR
        ? DEFAULT_ERROR_MESSAGE
        : message,
    });
  return next();
};
