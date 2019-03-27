const router = require('express').Router();
const userController = require('../../controllers/userController');
// const passport = require('passport');


// create user -- /api/user/create
router
  .route("/create")
  // .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/addalbum/:id"
router
  .route('/addalbum/:id')
  .post(userController.addAlbum);


// -- /api/user/authSuccess
router
  .route('/authSucces')
  .get(function(req, res){
    console.log('-----------authSuccess------------')
    console.log(res.user)
  })

// -- /api/user/:id"
router
  .route('/:id')
  .get(userController.findById)
  .put(userController.update)


module.exports = router;
