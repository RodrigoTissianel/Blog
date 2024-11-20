//Axios
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://frontpushblog-api.vercel.app/'
});


export default api;