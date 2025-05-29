// utils/sendEmail.js
const nodemailer = require('nodemailer');
const config = require('../../config/appConfig');
const logger = require('./logger');

module.exports = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.adminEmail,
        pass: config.adminPassword,
      },
    });

    const message = {
      from: config.adminEmail,
      to: config.adminEmail,
      subject: 'New Contact Form Submission',
      text: `New message from ${user.fullName}:

Phone: ${user.phone}
Email: ${user.email}
Location: ${user.city}, ${user.state}, ${user.country}
Role: ${user.role}
Business Name: ${user.businessName}

Message:
${user.message}`,
    };

    const info = await transporter.sendMail(message);
    logger.info(`Email sent: ${info.messageId}`);
  } catch (error) {
    logger.error(`Failed to send email: ${error.message}`);
    throw error;  // rethrow to let controller handle the error if needed
  }
};
// This utility function sends an email using nodemailer  