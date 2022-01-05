const getTalkers = require('../utils/getTalkers');
const setTalkers = require('../utils/setTalkers');

const deleteTalker = (req, res) => {
  const talkers = getTalkers();
  const { id } = req.params;
  const newTalkers = talkers.filter(({ id: idTalker }) => idTalker !== id);
  setTalkers(newTalkers);
  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalker;