
export const isEmailValid = (email) =>{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
    if(regex.test(email)){
        return true
    }else{
        return false
    }
}

export const isNameValid = (name)=>{

}

export const isPasswordValid = (password) =>{
    
}