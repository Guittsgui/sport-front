import * as S from './style'
import {NavLink, Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import {FaUserCog} from 'react-icons/fa'

const NavBar = () => {

    const auth = useContext(AuthContext)

    async function handleLogout(){
       await auth.signOut()
    }

    return <S.Container>
        <Link className='logo' to={auth.user ? '/home' : '/'}> 
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
            {auth.user && 
            <>
                <Link onClick={handleLogout} to='/'> Sair </Link>
                <FaUserCog color='white' size={40} cursor='pointer'/>
            </>}
        </ul>
    </S.Container>
}

export default NavBar