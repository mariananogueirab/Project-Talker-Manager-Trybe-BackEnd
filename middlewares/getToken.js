const generateToken = require('../utils/generateToken');

const getToken = (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
};

module.exports = getToken;