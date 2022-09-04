import React , {createContext, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest } from "./util";

export const AuthContext = createContext<IContext>({} as IContext  )

//ele vai ficar por volta e vai contorlar o estado , de quem fez login e de quem fez logout
export const AuthProvider = ( {children}: IAuthProvider) => {
const [user, setUser ] = useState<IUser | null>()

async function authenticate(email: string, password: string ) {
    const response = await LoginRequest(email, password)


    const payload = {token: response.token, email}

    setUser(payload)

}

function logout (){
setUser(null)
}

return (
     <AuthContext.Provider value={{...user, authenticate, logout }}>
        {children}
     </AuthContext.Provider>
)

}