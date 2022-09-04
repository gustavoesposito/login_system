import React , {createContext} from "react";
import { IAuthProvider, IContext } from "./types";

export const Auth = createContext<IContext>({} as IContext  )

//ele vai ficar por volta e vai contorlar o estado , de quem fez login e de quem fez logout
export const AuthProvider = ( {children}: IAuthProvider) => {

}