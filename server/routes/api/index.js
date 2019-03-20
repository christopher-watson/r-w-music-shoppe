const router = require('express').Router();
const userRoutes = require('./userRoutes');

// API routes
router.use('/user', userRoutes);

module.exports = router;
