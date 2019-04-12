const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./authRoutes');
const paymentRoutes = require('./paymentRoutes');

// API Routes
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/secure', paymentRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});



module.exports = router;
