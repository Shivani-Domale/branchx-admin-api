const { User } = require('../models');

exports.create = async (data) => {
  return await User.create(data);
};
