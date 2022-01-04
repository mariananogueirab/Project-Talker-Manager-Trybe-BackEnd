const generateToken = () => {
  const random = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
  const token = random.slice(0, 16);
  return token;
};

module.exports = generateToken;

// fonte para gerar token aleatório: https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28