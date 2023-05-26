import * as S from './style'
import PlansCotainer from './../../../components/PlansContainer'
import {Button} from './../../../components/button'
import FaqContainer from '../../../components/FaqContainer'

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
            <h1> Aqui a evolução é constante! Atividade física salva Vidas! </h1>
        </S.SecondBanner>
        <S.PlansContainer>
            <h1> Nossos Planos: </h1>
            <div className="plansArea">
                <PlansCotainer title={'Bronze'}/>
                <PlansCotainer title={'Silver'}/>
                <PlansCotainer title={'Gold'}/>
            </div>
        </S.PlansContainer>
        <S.ThirdBanner>
            <h1> Participe de provas e supere seus Limites.</h1>
        </S.ThirdBanner>
        <S.FaqContainer>
            <h1> Perguntas Frequentes</h1>
            <FaqContainer/>
            <FaqContainer/>
        </S.FaqContainer>
    </S.Container>
}

export default Home