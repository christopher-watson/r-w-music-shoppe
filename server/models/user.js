const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const OAuth2Strategy = require('passport-oauth2');

const User = new Schema({
  name: { 
    type: String, 
    default: 'TEST'
  },
  email: { 
    type: String, 
    default: 'test'
  },
  //cart full of albums
  _albums: [{
    type: [Schema.Types.ObjectId], 
    ref: 'Album'
  }],
});

// Set up passport to authenticate
// User.plugin(OAuth2Strategy);

module.exports = mongoose.model('User', User);
