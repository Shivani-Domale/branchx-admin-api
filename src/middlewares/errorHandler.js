// middleware/errorHandler.js
const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(`${err.message} - ${req.method} ${req.originalUrl} - ${req.ip}`);

  res.status(500).json({
    error: 'Internal Server Error',
    details: err.message,
  });
};
// This middleware logs the error details and sends a generic error response
// It uses a logger utility to log the error message, request method, URL, and IP address 