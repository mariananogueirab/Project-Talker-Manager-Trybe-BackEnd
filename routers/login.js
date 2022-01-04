const express = require('express');
const getToken = require('../middlewares/getToken');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = express.Router();

router.post('/', validateEmail, validatePassword, getToken);

module.exports = router;