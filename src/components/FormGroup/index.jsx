import * as S from './style'

const FormGroup = ({children, error}) => {
    return <S.Container>
        {children}
        <span>  </span>
    </S.Container>
}

export default FormGroup