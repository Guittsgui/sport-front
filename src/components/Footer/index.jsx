import * as S from './style'
import {BsGithub,BsLinkedin, BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {Link} from 'react-router-dom'



const Footer = () =>{

    return <S.Container>
        <p> Projeto feito com fins de Estudos.</p>
        <p className='name'> Dev: Guilherme Tavares </p>
        <ul>
            <li> <Link to=""> <BsGithub size={30}/> </Link> </li>
            <li> <Link> <BsLinkedin size={30}/> </Link> </li>
            <li> <Link> <BsWhatsapp size={30}/> </Link> </li>
            <li> <Link> <BsInstagram size={30}/> </Link></li>
        </ul>
    </S.Container>
}

export default Footer