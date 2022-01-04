const getTalkers = require('../utils/getTalkers');

const getTalkerById = (req, res) => {
  const { id } = req.params;
  const talkers = getTalkers();
  const talkerById = talkers.find((talker) => talker.id === Number(id));
  if (!talkerById) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(talkerById);
};

module.exports = getTalkerById;