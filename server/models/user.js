const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: { 
    type: String, 
    default: 'USERNAME'
  },
  googleId: { 
    type: String, 
    default: 'GOOGLE_ID'
  },
  thumbnail: { 
    type: String, 
    default: 'THUMBNAIL'
  },
  //cart full of albums
  _albums: [{
    type: [Schema.Types.ObjectId], 
    ref: 'Album'
  }],
});

module.exports = mongoose.model('User', User);
