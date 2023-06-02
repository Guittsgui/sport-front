import { useState ,useEffect } from "react"
import { AuthContext} from "./AuthContext"
import { api } from "../../api"

export const AuthProvider = ({children}) =>{

    const [user,setUser] = useState(null)

    useEffect(()=>{

        const validateToken= async() => {
            const storageData = localStorage.getItem('authToken')
            if(!storageData){
                return
            }
            const {user} = await api.verifyToken(storageData)
            setUser(user)
        }

        validateToken()
    },[])


    async function signIn(loginData){
        const data = await api.verifyUserLogin(loginData)
        const {msg, hasUser, token} = data
        if(hasUser && token){
            setUser(hasUser)
            setToken(token)
        }
        return msg
    }

    async function signOut(){
        setUser(null)
        setToken('')
    }

    function setToken(token){
        localStorage.setItem('authToken', token)
    }

    return(
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
      

}