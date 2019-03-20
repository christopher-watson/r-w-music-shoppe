const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
// const Album = new Schema({
  artist: { 
    type: String, 
    default: 'Elton John'
  },
  title: { 
    type: String, 
    default: 'Yellow Brick Road'
  },
  price: { 
    type: Number, 
    default: 20.00
  },
  desc: { 
    type: String, 
    default: 'test'
  },
  art: { 
    type: String, 
    default: 'https://res.cloudinary.com/yowats0n/image/upload/v1553119536/rw-music/default_album.png'
  },
});

const Album = mongoose.model("Albums", albumSchema);
module.exports = Album;

// module.exports = mongoose.model('Album', Album);
