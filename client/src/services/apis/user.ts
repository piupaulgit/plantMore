import axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const url = "auth"

export const userRegistration = (payload: object) => {
    return axios
        .post(`${API_URL}/${url}/register`, payload)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};

export const userLogin = (payload: object) => {
    return axios
        .post(`${API_URL}/${url}/login`, payload)
        .then((res) => res.data)
        .catch((err) => err);
};