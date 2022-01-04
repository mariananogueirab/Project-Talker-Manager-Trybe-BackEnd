const fs = require('fs');

const getTalkers = () => {
  try {
    const data = fs.readFileSync('./talker.json');
    const talkers = JSON.parse(data);
    return talkers;
  } catch (e) {
    return [];
  }
};

module.exports = getTalkers;