import { useContext } from "react"
import { AuthContex } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRouter({children}){
    const {users,loading}=useContext(AuthContex)
    const location = useLocation()

    if(loading)
    {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(users)
    {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}