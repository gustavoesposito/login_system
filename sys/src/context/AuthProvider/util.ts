import Password from "antd/lib/input/Password";
import { api } from "../../servcies/api";

//essa funçao acessa api
export async function LoginRequest (email: string,  password: string){

    try{
     const request = await api.post('login', {email, password} )

     return request.data
    } catch(error){
return null
    }
}


