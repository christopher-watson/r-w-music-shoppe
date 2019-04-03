const router = require('express').Router();
const passport = require('passport');

// auth login -- /auth/login
router.get('/login', (req, res) => {
  console.log('logging in');
  res.render('login', { user: req.user });
});

// auth logout -- /auth/logout
router.get('/logout', (req, res) => {
  console.log('logging out');
  // console.log(req)
  console.log('--------------logout req-----------------');
  console.log(req)
  req.logout();
  // res.redirect('http://localhost:3000/');
  res.redirect('/');
});

// auth with google+ -- /auth/google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));


router
  .route('/google/redirect')
  .get(passport.authenticate('google'), function (req, res) {
    console.log('--------------req-----------------');
    console.log(req.user)
    res.redirect('http://localhost:3000/api/user/authSuccess?=' + req.user._id);
  });


module.exports = router;

