import * as S from './style'
import {useState} from 'react'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'


const FaqContainer = ({question}) => {

    const [clicked, setClicked] = useState(false)

    function handleOpenFaq(){
        setClicked(!clicked)
    }

    return <S.Container>
        <S.Header onClick={handleOpenFaq}>
            <p> {question.question} </p>
            {!clicked && <AiOutlineArrowDown size={30}/>}
            {clicked && <AiOutlineArrowUp size={30}/>}
        </S.Header>
        <S.Body clicked={clicked}>
            <p> {question.response} </p>
        </S.Body>
    </S.Container>
}

export default FaqContainer