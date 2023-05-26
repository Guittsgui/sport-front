import * as S from './style'

const Home = () => {

    return <S.Container>
        <S.Banner/>
        <S.TextContainer>
            <h1> Todos seus Esportes em um só Lugar</h1>
            <p> Aqui você encontra um registro completo de seus treinos, futuras provas, com fácil acesso por qualquer dispositivo. </p>
            <p> Seus treinos irão atingir um novo patamar. </p>
            <p> Planilhas personalizadas por profissionais, com contato 24 horas por dia. </p>
        </S.TextContainer>
        <S.SecondBanner>
            <h1> Evolua e supere seus limites! Atividade física salva Vidas! </h1>
        </S.SecondBanner>
    </S.Container>
}

export default Home