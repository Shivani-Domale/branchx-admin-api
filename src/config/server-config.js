require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  ORG_ADMIN_EMAIL: process.env.ORG_ADMIN_EMAIL,
  ORG_ADMIN_PASSWORD: process.env.ORG_ADMIN_PASSWORD,
};
