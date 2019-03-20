const db = require('../models');
const User = require('../models/user');

module.exports = {
  findAll: function (req, res) {
    db
      .User
      .find({})
      .sort({_id: 1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserName: function (req, res) {
    db
      .User
      .findOne({username: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db
      .User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db
      .User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db
      .User
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db
      .User
      .findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addAlbum: function(req, res) {
    // console.log(req.params.id)
    db
      .User
      .findOneAndUpdate(
        {_id: req.params.id},
        {$push: {_albums: req.body}},
        // {safe: true, upsert: true},
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // register: function (req, res) {
  //   /* To create a new user */
  //   const user = new User({
  //     username: req.body.username,
  //     name: req.body.name,
  //     // photo: req.body.photo,
  //     // email: req.body.email,
  //     // phone: req.body.phone,
  //     // twitter: req.body.twitter,
  //     // fb: req.body.fb,
  //     // link: req.body.link,
  //     // git: req.body.link
  //   })
  //   User
  //     .register(user, req.body.password, function (err) {
  //       if (err) {
  //         console.log('error while user register!', err);
  //         return res.status(422).json(err);
  //       }
  //       console.log('user registered!');
  //       res.json(true);
  //     });
  // }
};
