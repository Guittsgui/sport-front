import * as S from './style'
import FormContainer from './../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'

const Register = () => {

    function handleSubmitForm(event){
        event.preventDefault()
        alert('cadastrou')
    }

    return <S.Container>
        <FormContainer title="Register">
            <Input type='text' placeholder='Insira o seu Nome Completo'/>
            <Input type='email' placeholder='Insira o seu Email'/>
            <Input type='password' placeholder='Insira a sua Senha'/>
            <Input type='password' placeholder='Repita a sua Senha'/>
            <Button onClick={handleSubmitForm}> Cadastrar </Button>
            <Link to="/login"> Já é cadastrado? Clique Aqui para Logar</Link>

        </FormContainer>
    </S.Container>
}

export default Register