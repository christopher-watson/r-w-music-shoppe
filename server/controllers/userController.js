const db = require('../models');
const User = require('../models/user');

module.exports = {
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

  removeAlbum: function(req, res) {
    // console.log(req.params.id)
    db
      .User
      .findOneAndUpdate(
        {_id: req.params.id},
        {$pull: {_albums: {_id: req.body}}},
        // console.log(req.body)
        // {safe: true, upsert: true},
      )
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

  // findByUserName: function (req, res) {
  //   db
  //     .User
  //     .findOne({username: req.params.id})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // findAll: function (req, res) {
  //   db
  //     .User
  //     .find(req.query)
  //     .sort({date: 1})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // remove: function (req, res) {
  //   db
  //     .User
  //     .findById({_id: req.params.id})
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

};
