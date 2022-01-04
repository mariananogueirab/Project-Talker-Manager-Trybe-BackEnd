const getTalkers = require('../utils/getTalkers');

const getAllTalkers = (req, res) => {
  const talkers = getTalkers();
  return res.status(200).json(talkers);
};

module.exports = getAllTalkers;