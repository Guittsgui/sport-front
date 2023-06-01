import { useState } from "react"
import { AuthContext} from "./AuthContext"
import { api } from "../../api"

export const AuthProvider = ({children}) =>{

    const [user,setUser] = useState(null)

    async function signIn(loginData){
        const data = await api.verifyUserLogin(loginData)
        const {msg, hasUser, token} = data
        if(hasUser && token){
            setUser(hasUser)
        }
        return msg
    }

    async function signOut(){
        setUser(null)
    }


    return(
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
      

}