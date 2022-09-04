import React , {createContext, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getLocalStorage , LoginRequest, setUserLocalStorage } from "./util";
import { useEffect } from "react";

export const AuthContext = createContext<IContext>({} as IContext  )

//ele vai ficar por volta e vai contorlar o estado , de quem fez login e de quem fez logout
export const AuthProvider = ( {children}: IAuthProvider) => {
const [user, setUser ] = useState<IUser | null>()

useEffect(() => {
 const user = getLocalStorage();

 if (user){
    setUser(user)
 }
}, [])

async function authenticate(email: string, password: string ) {
    const response = await LoginRequest(email, password)


    const payload = {token: response.token, email}

    setUser(payload)
    setUserLocalStorage(payload)

}

function logout (){
setUser(null)
setUserLocalStorage(null)
}

return (
     <AuthContext.Provider value={{...user, authenticate, logout }}>
        {children}
     </AuthContext.Provider>
)

}