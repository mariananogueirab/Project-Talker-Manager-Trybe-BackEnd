const validateRateAndDate = (req, res, next) => {
  const { talk: { rate, watchedAt } } = req.body;
  const pathern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  const validDate = pathern.test(watchedAt);
  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!validDate) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = validateRateAndDate;