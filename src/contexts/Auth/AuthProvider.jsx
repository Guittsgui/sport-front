import { useState } from "react"
import { AuthContext} from "./AuthContext"
import { api } from "../../api"

export const AuthProvider = ({children}) =>{

    const [user,setUser] = useState(null)

    async function signIn(loginData){
        const data = await api.verifyUserLogin(loginData)
        if(data.user && data.token){
            setUser(data.user)
            return true 
        }
        return false
    }


    function signOut(){
        //callNaApiPraDestruir.
        setUser(null)
    }


    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
      

}