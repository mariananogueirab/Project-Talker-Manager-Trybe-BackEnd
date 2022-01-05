const getTalkers = require('../utils/getTalkers');
const setTalkers = require('../utils/setTalkers');

const updateTalker = (req, res) => {
  const { name, age, talk } = req.body;
  const id = Number(req.params.id);
  const talkers = getTalkers();
  const newTalker = { id, name, age, talk };
  const newTalkers = talkers.map((talker) => (talker.id === id ? newTalker : talker));
  setTalkers(newTalkers);
  return res.status(200).json(newTalker);
};

module.exports = updateTalker;