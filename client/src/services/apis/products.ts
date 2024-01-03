import axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const url = "products"

export const getAllProducts = (limit:number) => {
    let urlStr = limit ? `${API_URL}/${url}/all?limit=${limit}` : `${API_URL}/${url}/all`;
    return axios
        .get(urlStr)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};