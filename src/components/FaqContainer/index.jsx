import * as S from './style'
import {useState} from 'react'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'


const FaqContainer = () => {

    const [clicked, setClicked] = useState(false)

    function handleOpenFaq(){
        setClicked(!clicked)
    }

    return <S.Container>
        <S.Header onClick={handleOpenFaq}>
            <p> Preciso ser atleta para participar ? </p>
            {!clicked && <AiOutlineArrowDown size={30}/>}
            {clicked && <AiOutlineArrowUp size={30}/>}
        </S.Header>
        <S.Body clicked={clicked}>
            <p> Não, nosso time está pronto para recepcionar desde atletas de ponta até quem nunca praticou nenhuma atividade física. </p>
        </S.Body>
    </S.Container>
}

export default FaqContainer