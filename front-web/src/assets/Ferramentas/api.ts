import axios from "axios";
import { OrderPayload } from "../../types/frase";

const API_URL = 'http://localhost:8080';
//process.env.REACT_APP_API_URL

export function fetchProducts(pageNumber: number) {
    return axios.get(`${API_URL}/frases?size=12&page=${pageNumber}&sort=qtdUsos,desc`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload);
}