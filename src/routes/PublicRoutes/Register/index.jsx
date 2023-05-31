import * as S from './style'
import FormContainer from './../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import FormGroup from '../../../components/FormGroup'
import { isEmailValid , isNameValid , isPasswordValid } from '../../../utils/validateFields'
import { api } from '../../../api'



const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [erros, setErros] = useState([])
    const [apiResponseStatus, setApiResponseStatus] = useState()
    const [apiResponseMsg, setApiResponseMsg] = useState()

    async function handleSubmitForm(event){
        event.preventDefault() 
        setPassword('')
        setConfirmPassword('')  
        if( password !== confirmPassword){
            alert('Senhas incompatíveis')
            return
        }
        const newUser = {
            name: name,
            email: email,
            password: password
        }
        const response = await api.addNewUser(newUser)
        setApiResponseStatus(response.status)
        setApiResponseMsg(response.msg)
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
                setErros((prev) => [...prev, {field: 'password', msg: 'Senha inválida - min 8 caracteres - sem espaço '}])
            }
        }else{
            setErros((prev) => prev.filter((err) => err.field !== 'password')) 
        } 
    }

    function getErroMessageByFieldName(fieldName){
        return erros.find((err)=> err.field === fieldName)?.msg
    }


    return <S.Container>
        <FormContainer title="Register">
           {apiResponseStatus !== 202 &&
                <>
                    <FormGroup error={getErroMessageByFieldName('name')}>
                            <Input type='text' 
                            autoFocus
                            placeholder='Insira o seu Nome Completo *'
                            value={name}
                            onChange={handleChangeName}/>
                    </FormGroup>
        
                    <FormGroup error={getErroMessageByFieldName('email')}>
                            <Input type='email' 
                            placeholder='Insira o seu Email *'
                            value={email}
                            onChange={handleChangeEmail}/>
                    </FormGroup>
                    
                    <FormGroup error={getErroMessageByFieldName('password')}>
                            <Input type='password' 
                            placeholder='Insira a sua Senha *'
                            value={password}
                            onChange={handleChangePassword}/>
                    </FormGroup>
        
                    <FormGroup >
                            <Input type='password' 
                            placeholder='Repita a sua Senha *'
                            value={confirmPassword}
                            onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    </FormGroup> 
        
                    {apiResponseStatus ===400 &&
                         <span className='errorApiMsg'> 
                            {apiResponseMsg}
                        </span> }      
        
                    <Button onClick={handleSubmitForm} 
                        disabled={ !name || !email || !password || !confirmPassword || erros.length !== 0}> 
                            Cadastrar 
                    </Button>
                    <Link to="/login"> Já é cadastrado? Clique Aqui para Logar</Link>
            </>          
           } 
          {apiResponseStatus === 202 &&
            <>
                <h2 className='acceptApiMsg'> {apiResponseMsg} </h2>
                <Link className='linkAccept' to="/login"> Click to Login </Link>
            </>
          }
        </FormContainer>
    </S.Container>
}

export default Register