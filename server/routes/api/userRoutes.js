const router = require('express').Router();
const passport = require('passport');
const userController = require('../../controllers/userController');

// DEBUG
router
  .route("/create")
  // .get(userController.findAll)
  .post(userController.create);


// Matches with "/api/user/login"

// router
//   .route('/login')
//   .post(passport.authenticate('oauth2'), function(req, res) {
//     session: true,
//     // Log in and send back user information
//     console.log(req.user);
//     // if(req.user){
//     //   console.log(`${req.user.username} has logged in`)
//     // }
//     res.json(req.user);
//   })
//   .get(function(req, res) {
//     // Check to see if user is logged in
//     console.log(req.user);
//     if (req.user) {
//       // If logged in, send back this flag and the username itself
//       // NOTE: you can send back whatever you want here
//       res.json({isLoggedIn: true, username: req.user.username});
//     } else {
//       // If user isn't logged in, send back false
//       res.json(false);
//     }
//   });

// logout route
router
  .route('/logout')
  .get(function(req,res) {
    // Log user out
    req.logout()
    console.log(req.user);
    res.json(false);
  })

// Matches with "/api/user/:id"
router
  .route('/:id')
  .get(userController.findByUserName)
  .put(userController.update);

  // Matches with "/api/user/delete/:id"
router
  .route('/delete/:id')
  .delete(userController.remove);

// Matches with "/api/user/addalbum/:id"
router
  .route('/addalbum/:id')
  .post(userController.addAlbum);

  // Matches with "/api/user/all"
router
  .route('/all')
  .get(userController.findAll);

module.exports = router;
