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
        const json = await response.json();
        return json;
    },



}