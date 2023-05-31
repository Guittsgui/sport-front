import * as S from './style'
import FormContainer from '../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import FormGroup from './../../../components/FormGroup'
import { isEmailValid } from '../../../utils/validateFields'
import { api } from '../../../api'
import { useNavigate } from 'react-router-dom'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState()
    const navigate = useNavigate()

    async function handleSubmitForm(event){
        event.preventDefault()
        setEmail('')
        setPassword('')
        const loginData = {
            email: email,
            password: password
        }

        
        const json = await api.verifyUserLogin(loginData)
        if(json.msg === 'OK'){
            navigate('/home')
        }else{
            setError(json.msg)
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

            {error && <p className='danger'> {error} </p>}

            <Button onClick={handleSubmitForm}
            disabled={!password || !isEmailValid(email)}>
                 Login 
            </Button>

            <Link> Esqeuceu sua Senha ? Clique Aqui </Link>
        </FormContainer>
        
        
    </S.Container>
}

export default Login