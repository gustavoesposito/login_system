import axios from 'axios'

export const api = axios.create ({
    baseURL: "https://reqres.isn/api/",
});


api.interceptors.request.use(
    (config) => {},
    (error) => {
        return Promise.reject(error)
    }
)