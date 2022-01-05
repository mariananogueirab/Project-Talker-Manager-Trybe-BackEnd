const getTalkers = require('../utils/getTalkers');
const setTalkers = require('../utils/setTalkers');

const getNewTalker = (req, res) => {
  const talkers = getTalkers();
  const { name, age, talk } = req.body;
  const newTalker = {
    id: talkers.length + 1,
    name,
    age,
    talk,
  };
  setTalkers([...talkers, newTalker]);
  return res.status(201).json(newTalker);
};

module.exports = getNewTalker;