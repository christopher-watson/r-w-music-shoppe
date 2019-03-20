import axios from 'axios';

export default {
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },

  loginCheck: function() {
    return axios.get('/api/users/login')
  },
}