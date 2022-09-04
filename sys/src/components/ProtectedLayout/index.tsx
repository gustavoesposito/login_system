import React from "react"
import { Outlet } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = (   ) => {

    const auth = useAuth()

    if(!auth.email){
        return (
            <h1>Você não tem acesso à página</h1>
        )
    }

    return <Outlet/>

}