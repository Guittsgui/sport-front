import FormContainer from '../../../components/FormContainer'
import { Input } from '../../../components/input'
import { Button } from '../../../components/button'
import FormGroup from '../../../components/FormGroup'
import { useState } from 'react'
import { isPasswordValid } from '../../../utils/validateFields'


import * as S from './style'
import { Link } from 'react-router-dom'


export const ChangePassword = () =>{

    const [error,setError] = useState()
    const [password,setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    function handleSubmit(){
        if(!password || !newPassword || !confirmNewPassword){
            setError('Preencha todos os Campos') 
            return
        }
        if(!isPasswordValid(newPassword)){
            setError('Mín 08 Characteres | Sem Espaço')
            return
        }
        if(newPassword !== confirmNewPassword){
            setError('Novas Senhas Incompatíveis')
            return
        }
        
        

        

    }

    return <S.Container>
        <FormContainer title="Nova Senha">
            <FormGroup>
                <Input placeholder='Informe sua senha Atual *'
                onChange={(e)=> setPassword(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Input placeholder='Informe sua nova senha *'
                onChange={(e)=> setNewPassword(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Input placeholder='Repita sua nova senha *'
                onChange={(e)=> setConfirmNewPassword(e.target.value)}/>
            </FormGroup>
            {error && <span className='danger'> {error}</span>}
            <Button onClick={handleSubmit}> Alterar Senha </Button>
            <Link to='/home'>Voltar</Link>

        </FormContainer>
    </S.Container>
}

export default ChangePassword