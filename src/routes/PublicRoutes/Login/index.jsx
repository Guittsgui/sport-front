import * as S from './style'
import FormContainer from '../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'

const Login = () => {

    function handleSubmitForm(event){
        event.preventDefault()
        alert('enviou')
    }

    return <S.Container>
        
        <FormContainer title="Login">
            <Input type="email" placeholder='Informe seu E-mail'/>
            <Input type="password" placeholder='Informe sua Senha'/>
            <Button onClick={handleSubmitForm}> Login </Button>
            <Link> Esqeuceu sua Senha ? Clique Aqui </Link>
        </FormContainer>
        
        
    </S.Container>
}

export default Login