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
  req.logout();
  // res.redirect('http://localhost:3000/');
  res.redirect('/');
});

// auth with google+ -- /auth/google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
// -- /auth/google/redirect
// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//   console.log('--------------req-----------------');
//   if (req.user){
//     console.log(req.user);
//     res.json({isLoggedIn: true, username: req.user.username, thumbnail: req.user.thumbnail})
//   }
//   else{
//     console.log('false req')
//     res.json(false)
//   }
//   console.log('before redirect')
//   res.redirect('http://localhost:3000/api/user/authSuccess');
// });


router
  .route('/google/redirect')
  .get(passport.authenticate('google'), function (req, res) {
    console.log('--------------req-----------------');
    console.log(req.user)
    // res.send(req.user)
    res.redirect('http://localhost:3000/api/user/authSuccess?=' + req.user._id);
    // res.redirect('/api/user/authSuccess');
    // res.end();
  });


module.exports = router;

