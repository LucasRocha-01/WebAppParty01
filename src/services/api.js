import axios from 'axios';

const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

// api.interceptors.request.use(
//     async (config) => {
//       const routes = [
//         '/signup',
//         '/login',
//       ];
  
//       if (!routes.includes(config.route)) {
//         const token = localStorage.getItem('token');
  
//         config.headers.authorization = `Bearer ${token}`;
//         return config;
//       }
//     },
//     (err) => {
//       Promise.reject(err);
//     },
//   );
  

export default api;