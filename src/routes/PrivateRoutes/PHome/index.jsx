import * as s from './style'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/Auth/AuthContext'

export const PHome = () =>{

    const {user} = useContext(AuthContext)

    return <s.Container>
        <h1> Hello User: {user.name} </h1>
    </s.Container>
}

export default PHome