const router = require('express').Router();
const userController = require('../../controllers/userController');
// const passport = require('passport');


// create user -- /api/user/create
router
  .route("/create")
  // .get(userController.findAll)
  .post(userController.create)

// Matches with "/api/user/addalbum/:id"
router
  .route('/addalbum/:id')
  .post(userController.addAlbum)

// Matches with "/api/user/removealbum/:id"
router
  .route('/removealbum/:id')
  .put(userController.removeAlbum)


// -- /api/user/authSuccess
router
  .route('/authSucces')
  .get(function(req, res){
    console.log('-----------authSuccess------------')
    console.log(res.user)
  })

// -- /api/user/loginStatus
router
  .route('/loginStatus')
  .get(userController.loginCheck)


// -- /api/user/:id"
router
  .route('/:id')
  .get(userController.findById)
  // .put(userController.update)


module.exports = router;
