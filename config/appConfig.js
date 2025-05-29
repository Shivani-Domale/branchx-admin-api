// config/appConfig.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
};
// Ensure that the environment variables are set for admin email and password
// This module exports the application configuration including port, admin email, and password