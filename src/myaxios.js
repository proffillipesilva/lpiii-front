import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:38000"
});


export default axiosInstance;