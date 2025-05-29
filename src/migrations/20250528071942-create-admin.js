'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin@123', 10); // You can change this password

    return queryInterface.bulkInsert('Admins', [{
      name: 'Org Admin',
      email: 'admin@branchx.com',
      password: hashedPassword,
      role: 'ORG_ADMIN',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Admins', { email: 'admin@branchx.com' });
  }
};
