import * as S from './style'
import FormContainer from '../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    function handleSubmitForm(event){
        event.preventDefault()
        
    }

    function handleEmailChange(event){
        setEmail(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    return <S.Container>
        
        <FormContainer title="Login">
            <Input type="email" 
            placeholder='Informe seu E-mail'
            value={email}
            onChange={handleEmailChange}/>

            <Input type="password" 
            placeholder='Informe sua Senha'
            value={password}
            onChange={handlePasswordChange}/>

            <Button onClick={handleSubmitForm}> Login </Button>

            <Link> Esqeuceu sua Senha ? Clique Aqui </Link>
        </FormContainer>
        
        
    </S.Container>
}

export default Login