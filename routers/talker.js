const express = require('express');
const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkerById = require('../middlewares/getTalkerById');

const router = express.Router();

router.get('/', getAllTalkers);
router.get('/:id', getTalkerById);

module.exports = router;
