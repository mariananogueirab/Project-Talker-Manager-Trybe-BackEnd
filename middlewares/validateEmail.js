const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailPath = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  const validEmail = emailPath.test(email);
  console.log('aqui');
  if (!email || !email.length) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!validEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = validateEmail;