import * as S from './style'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return <S.Container>
        <Link className='logo' to='/'> 
            <span className='my'>My</span>
            <span className='training'>Training</span>
            <span className='app'>APP</span> 
        </Link>
        <ul>
            <li> <NavLink to='/login'> Login </NavLink></li>
            <li> <NavLink to='/register'> Register </NavLink></li>
        </ul>
    </S.Container>
}

export default NavBar