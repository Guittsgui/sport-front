const urlBase = 'http://localhost:4000'

const token = localStorage.getItem('authToken')


export const api = {

    addNewUser: async (user) => {     
        const response = await fetch(`${urlBase}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const {msg} = await response.json();
        return {msg: msg, status: response.status}
    },


    verifyUserLogin: async (loginData) =>{
        const response = await fetch(`${urlBase}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        const json = await response.json()
        return json
    },

    verifyToken: async (token) => {
        const response = await fetch(`${urlBase}/verify`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        return json
    },

    changeUserPassword: async (password, userId, newPassword) => {
        const response = await fetch(`${urlBase}/changepassword`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json', 
                'authorization': `Bearer ${token}`              
            },
            body: JSON.stringify(password, userId , newPassword )
        })
        const json = await response.json()
        return
    }



}