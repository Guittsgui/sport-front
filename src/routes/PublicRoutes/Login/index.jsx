import * as S from './style'
import FormContainer from '../../../components/FormContainer'
import {Input} from '../../../components/input'
import { Button } from '../../../components/button'
import {Link} from 'react-router-dom'

const Login = () => {

    return <S.Container>
        
        <FormContainer title="Login">
            <Input type="email" placeholder='Informe seu E-mail'/>
            <Input type="password" placeholder='Informe sua Senha'/>
            <Button> Login </Button>
            <Link> Esqeuceu sua Senha ? Clique Aqui </Link>
        </FormContainer>
        
        
    </S.Container>
}

export default Login