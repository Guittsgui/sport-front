import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import Login from "../../routes/PublicRoutes/Login";

export const RequireAuth = ({children}) => {
     
   const auth = useContext(AuthContext)
    
   if(!auth.user){
       return <Login/>
   }
   return children
}