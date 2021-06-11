import axios from 'axios';

const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

api.interceptors.request.use(
    async (config) => {  
      const routes = [
        '/signup',
        '/login',
        // '/dashboard',
      ];
  
      if (!routes.includes(config.route)) {
        const token = localStorage.getItem('@AppParty:token');
  
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }
    },
    (err) => {
      Promise.reject(err); 
    },
  );
  

export default api;