const router = require('express').Router();
const albumController = require('../../controllers/albumController');

// ../api/album
router
  .route("/")
  .get(albumController.findAll)

  // ../api/album/all
router
  .route("/all")
  .get(albumController.findAll)

// ../api/album/:id
router
  .route("/:id")
  .get(albumController.findById)
  .put(albumController.update)

  // ../api/album/delete/:id
router
  .route("/delete/:id")
  .get(albumController.findById)
  .delete(albumController.remove);

// ../api/album/create
router
  .route('/create')
  .get(albumController.create)

module.exports = router;
