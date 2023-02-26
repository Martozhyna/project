//це наш аксіос сервіс
import axios from "axios";


import {baseURL} from "../configs";


const apiService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2JhNjc4OTYxYTE2ZmUwODE5N2E2M2NiODc2ZTUwYSIsInN1YiI6IjYzZjEyM2I4Y2FhY2EyMDA3ZjVlN2ExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XTwChO5eEUszMcEdUmdjG0WKI9KB5Pb1vnNq6S1inh0';

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config;
});

export {
    apiService,
};

