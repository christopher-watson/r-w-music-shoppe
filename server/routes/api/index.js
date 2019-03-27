const router = require('express').Router();
const userRoutes = require('./userRoutes');
const albumRoutes = require('./albumRoutes');


// API routes
router.use('/user', userRoutes);
router.use('/album', albumRoutes);

module.exports = router;
