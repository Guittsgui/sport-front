import * as S from './style'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return <S.Container>
        <ul>
            <li> <NavLink to='/login'> Login </NavLink></li>
            <li> <NavLink to='/register'> Register </NavLink></li>
        </ul>
    </S.Container>
}

export default NavBar