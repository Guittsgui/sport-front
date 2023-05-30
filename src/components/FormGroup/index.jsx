import * as S from './style'

const FormGroup = ({children, error}) => {
    return <S.Container error={error}>
        {children}
        <span> {error} </span>
    </S.Container>
}

export default FormGroup