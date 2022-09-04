import axios from 'axios'
import { getLocalStorage } from '../context/AuthProvider/util';

export const api = axios.create ({
    baseURL: "https://reqres.isn/api/",
});


api.interceptors.request.use(
    (config) => {
       const user = getLocalStorage()

      
   
},
    (error) => {
        return Promise.reject(error)
    }
)