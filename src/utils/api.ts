import axios from 'axios';

const Axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

Axios.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('@jwt');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default Axios;