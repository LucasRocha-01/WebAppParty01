import axios from 'axios';

const api = axios.create({
    baseURL: '/owner-guest',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

export default api;