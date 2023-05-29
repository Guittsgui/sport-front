import * as S from './style'
import FormContainer from '../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import FormGroup from './../../../components/FormGroup'
import { isEmailValid } from '../../../utils/validateFields'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(false)

    function handleSubmitForm(event){
        event.preventDefault()
        setEmail('')
        setPassword('')

        if( email === 'a' && password === 'a'){
            alert('logou')
        }else{
            setError(true)
        }     
    }

    function handleEmailChange(event){
        setError(false)
        setEmail(event.target.value)
    }

    function handlePasswordChange(event){
        setError(false)
        setPassword(event.target.value)
    }

    return <S.Container>
        
        <FormContainer title="Login">
            <FormGroup>
                <Input type="email" 
                autoFocus
                placeholder='Informe seu E-mail *'
                value={email}
                onChange={handleEmailChange}/>
            </FormGroup>

            <FormGroup>
                <Input type="password" 
                placeholder='Informe sua Senha *'
                value={password}
                onChange={handlePasswordChange}/>
            </FormGroup>

            {error && <p className='danger'> Login ou Senha Inválidos. </p>}

            <Button onClick={handleSubmitForm}
            disabled={!password || !isEmailValid(email)}>
                 Login 
            </Button>

            <Link> Esqeuceu sua Senha ? Clique Aqui </Link>
        </FormContainer>
        
        
    </S.Container>
}

export default Login