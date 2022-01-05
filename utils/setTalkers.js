const fs = require('fs');

const setTalkers = (newFile) => {
  fs.writeFileSync('./talker.json', JSON.stringify(newFile));
};

module.exports = setTalkers;