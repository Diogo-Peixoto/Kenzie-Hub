import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContexts } from "../../context/UserContext";

function ProtectedRoutes(){
    const { user, loading } = useContext(UserContexts)
    
    if(loading){
        return null
    }

    return user.id ?  <Outlet /> : <Navigate to='/' replace />
}

export default ProtectedRoutes;