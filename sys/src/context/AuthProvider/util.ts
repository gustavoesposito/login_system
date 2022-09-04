import Password from "antd/lib/input/Password";
import { api } from "../../servcies/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('u', JSON.stringify(user));
}

export function getLocalStorage  () {
    const json = localStorage.getItem('u')

    if(!json){
        return null;
    }

    const user = JSON.parse(json)

    return user ?? null;
} 

//essa funçao acessa api
export async function LoginRequest (email: string,  password: string){

    try{
     const request = await api.post('login', {email, password} )

     return request.data
    } catch(error){
return null
    }
}


