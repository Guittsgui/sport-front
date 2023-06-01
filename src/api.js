const urlBase = 'http://localhost:4000'

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
        const response = await fetch(`${urlBase}/validate`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
        const json = await response.json()
        return json
    }



}