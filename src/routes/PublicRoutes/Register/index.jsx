import * as S from './style'
import FormContainer from './../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import FormGroup from '../../../components/FormGroup'
import { isEmailValid , isNameValid , isPasswordValid , isConfirmedPasswordValid} from '../../../utils/validateFields'
const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [erros, setErros] = useState([])

    function handleSubmitForm(event){
        event.preventDefault()   
        console.log(erros)
    }

    function handleChangeName(event){
        setName(event.target.value)
        if(!isNameValid(event.target.value)){
            if(!erros.some((err)=> err.field === 'name')){
                setErros((prev) => [...prev, {field: 'name', msg: 'Nome Inválido - min 04caracteres.'}])
            }
        }else{
            setErros((prev) => prev.filter((err) => err.field !== 'name')) 
        } 
    }

    function handleChangeEmail(event){
        setEmail(event.target.value)
        if(!isEmailValid(event.target.value)){
            if(!erros.some((err) => err.field === 'email')){
                setErros((prev) => [...prev, {field: 'email', msg: 'Informe um Email válido.'}])
            }
        }else{
            setErros((prev) => prev.filter((err) => err.field !== 'email')) 
        }       
    }

    function handleChangePassword(event){
        setPassword(event.target.value)
        if(!isPasswordValid(event.target.value)){
            if(!erros.some((err)=> err.field === 'password')){
                setErros((prev) => [...prev, {field: 'password', msg: 'Nome Inválido - min 04caracteres.'}])
            }
        }else{
            setErros((prev) => prev.filter((err) => err.field !== 'password')) 
        } 
    }

    function handleChangeConfirmPassword(event){
        setConfirmPassword(event.target.value)
        
        if(!isConfirmedPasswordValid(password, confirmPassword)){
            if(!erros.some((err) => err.field === 'confirmPassword')){
                setErros((prev) => [...prev, {field: 'confirmPassword', msg: 'Senhas diferentes.'}])
            }else{
                setErros((prev) => prev.filter((err) => err.field !== 'confirmPassword'))
            }
        }
    }

    return <S.Container>
        <FormContainer title="Register">
            <FormGroup>
                <Input type='text' 
                autoFocus
                placeholder='Insira o seu Nome Completo *'
                value={name}
                onChange={handleChangeName}/>
            </FormGroup>

            <FormGroup >
                <Input type='email' 
                placeholder='Insira o seu Email *'
                value={email}
                onChange={handleChangeEmail}/>
            </FormGroup>
        
            <FormGroup>
                <Input type='password' 
                placeholder='Insira a sua Senha *'
                value={password}
                onChange={handleChangePassword}/>
            </FormGroup>

            <FormGroup >
                <Input type='password' 
                placeholder='Repita a sua Senha *'
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}/>
            </FormGroup>        

            <Button onClick={handleSubmitForm} 
            disabled={!name || !email || !password || !confirmPassword }> 
                Cadastrar 
            </Button>
            <Link to="/login"> Já é cadastrado? Clique Aqui para Logar</Link>

        </FormContainer>
    </S.Container>
}

export default Register