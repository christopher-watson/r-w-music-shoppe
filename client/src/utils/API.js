import axios from 'axios';

export default {
  logout: function() {
    return axios.get('http://localhost:3001/auth/logout')
  },

  getUserInfo: function(userID) {
    return axios.get(`/api/user/${userID}`)
  },
  
}