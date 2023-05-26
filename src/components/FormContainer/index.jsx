import * as S from './style'
import {Button} from './../button'

const FormContainer = ({title, children}) =>{
    return <S.Container>
        <h1> {title} </h1>
        {children}
    </S.Container>
}

export default FormContainer