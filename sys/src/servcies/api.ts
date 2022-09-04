import axios from 'axios'

export const api = axios.create ({
    baseURL: "https://reqres.isn/api/"
});