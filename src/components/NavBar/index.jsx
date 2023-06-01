import * as S from './style'
import {NavLink, Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

const NavBar = () => {

    const auth = useContext(AuthContext)

    function handleLogout(){
        auth.signOut()
    }

    return <S.Container>
        <Link className='logo' to='/'> 
            <span className='my'>My</span>
            <span className='training'>Training</span>
            <span className='app'>APP</span> 
        </Link>
        <ul>
            {!auth.user &&
                <>
                    <li> <NavLink to='/login'> Login </NavLink></li>
                    <li> <NavLink to='/register'> Register </NavLink></li>
                </>
            }
            {auth.user && <Link onClick={handleLogout} to='/'> Sair </Link>}
        </ul>
    </S.Container>
}

export default NavBar