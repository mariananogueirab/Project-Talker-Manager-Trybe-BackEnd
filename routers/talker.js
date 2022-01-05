const express = require('express');
const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkerById = require('../middlewares/getTalkerById');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validadeName');
const validateAge = require('../middlewares/validateAge');
const validateRateAndDate = require('../middlewares/validateRateAndDate');
const validateTalk = require('../middlewares/validateTalk');
const getNewTalker = require('../middlewares/getNewTalker');
const deleteTalker = require('../middlewares/deleteTalker');

const router = express.Router();

router.get('/', getAllTalkers);
router.get('/:id', getTalkerById);
router.post('/', validateToken, validateName, validateAge, validateTalk, validateRateAndDate, getNewTalker);
router.delete('/:id', validateToken, deleteTalker);

module.exports = router;
