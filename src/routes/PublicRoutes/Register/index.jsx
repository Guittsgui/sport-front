import * as S from './style'
import FormContainer from './../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    function handleSubmitForm(event){
        event.preventDefault()
        alert('cadastrou')
    }

    function handleChangeName(event){
        setName(event.target.value)
    }
    function handleChangeEmail(event){
        setEmail(event.target.value)
    }
    function handleChangePassword(event){
        setPassword(event.target.value)
    }
    function handleChangeConfirmPassword(event){
        setConfirmPassword(event.target.value)
    }

    return <S.Container>
        <FormContainer title="Register">
            <Input type='text' 
            placeholder='Insira o seu Nome Completo'
            value={name}
            onChange={handleChangeName}/>

            <Input type='email' 
            placeholder='Insira o seu Email'
            value={email}
            onChange={handleChangeEmail}/>

            <Input type='password' 
            placeholder='Insira a sua Senha'
            value={password}
            onChange={handleChangePassword}/>

            <Input type='password' 
            placeholder='Repita a sua Senha'
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}/>

            <Button onClick={handleSubmitForm}> Cadastrar </Button>
            <Link to="/login"> Já é cadastrado? Clique Aqui para Logar</Link>

        </FormContainer>
    </S.Container>
}

export default Register