const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const matchRoutes = require('./matchRoutes');
const auth = require('../middlewares/authenticationMiddleware');

router.use('/user', userRoutes);
router.use('/match', matchRoutes);

module.exports = router;
