import * as S from './style'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return <S.Container>
        <Link className='logo'> <h1> MyTrainningPlan APP</h1> </Link>
        <ul>
            <li> <NavLink to='/login'> Login </NavLink></li>
            <li> <NavLink to='/register'> Register </NavLink></li>
        </ul>
    </S.Container>
}

export default NavBar