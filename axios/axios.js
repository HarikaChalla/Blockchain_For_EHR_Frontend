const axios = require('axios');


const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;
  //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
