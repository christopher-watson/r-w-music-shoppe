import axios from 'axios';

export default {
  logout: function() {
    return axios.get('http://localhost:3001/auth/logout')
  },

  getUserInfo: function(userID) {
    return axios.get(`/api/user/${userID}`)
  },

  addToCart: function(userID, albumID) {
    return axios.post(`/api/user/addalbum/${userID}`, {
      _id: albumID
    })
  },
  
  getAlbumInfo: function(albumID) {
    return axios.get(`/api/album/${albumID}`)
  },

  removeFromCart: function(userID, albumID) {
    return axios.put(`/api/user/removealbum/${userID}`, {
      id: albumID
    })
  },
  
}