
export const isEmailValid = (email) =>{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(email)
}

export const isNameValid = (name)=>{
    if(name.length <= 3){
        return false
    }else{
        return true
    }
}

export const isPasswordValid = (password ) =>{
    const passwordSplited = password.split(' ')
    if(passwordSplited.length > 1 ||password.length < 8){
        return false
    }else{
        return true
    }
}

export const isConfirmedPasswordValid = (password , confirmPassword)=>{
    if (password === confirmPassword){
        return true
    }else{
        return false
    }
}
