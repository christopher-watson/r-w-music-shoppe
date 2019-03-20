const router = require('express').Router();
const albumController = require('../../controllers/albumController');

// ../api/albums
router
  .route("/")
  .get(albumController.findAll)

  // ../api/albums/all
router
  .route("/all")
  .get(albumController.findAll)

// ../api/albums/:id
router
  .route("/:id")
  .get(albumController.findById)
  .put(albumController.update)
  .delete(albumController.remove);

// ../api/albums/create
router
  .route('/create')
  .get(albumController.create)

module.exports = router;
