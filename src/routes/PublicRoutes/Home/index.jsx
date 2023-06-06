import * as S from './style'
import PlansCotainer from './../../../components/PlansContainer'
import FaqContainer from '../../../components/FaqContainer'
import { faqQuestionsList } from '../../../utils/faqQuestions'
import * as plans from '../../../utils/pricePlans'
import { imagesCarroussel } from '../../../utils/imagesCarroussel'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from 'react'

const Home = () => {
    
    const [currentState, setCurrentState] = useState(0)

    const bgStyle = {
        backgroundImage: `url(${imagesCarroussel[currentState].url})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        height: "400px",
        width: "900px",
        borderRadius: "20px",
        boxShadow: "2px 2px 2px #00000075", 
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 2px black',
        fontSize: '30px'
    }

    function handleNextSlide(){      
        if(currentState < imagesCarroussel.length -1 ){
            setCurrentState((prev) => prev + 1)
            return
        }
        setCurrentState(0)
    }

    function handlePrevSlide(){
        if(currentState === 0 ){
            setCurrentState(imagesCarroussel.length -1)
            return
        }
        setCurrentState((prev) => prev -1)
    }

    function handleChangeSlideByMenu(index){
        setCurrentState(index)
    }


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
                <PlansCotainer plan={plans.bronze}/>
                <PlansCotainer plan={plans.silver}/>
                <PlansCotainer plan={plans.gold}/>
            </div>
        </S.PlansContainer>
        <S.ThirdBanner>
            <h1> Participe de provas e supere seus Limites.</h1>
        </S.ThirdBanner>
        <S.FaqContainer>
            <h1> Perguntas Frequentes</h1>
            {faqQuestionsList.map((question)=>(
                <FaqContainer key={question.id} question={question}/>
            ))}
        </S.FaqContainer>
        <S.FourthBanner> 
                <h1> Nossos Esportes: </h1>            
                <div className='SlideContainer'>
                    <button onClick={handlePrevSlide}> 
                        <AiOutlineArrowLeft size={30}/>
                    </button>
                    <div style={bgStyle}> <h2> {imagesCarroussel[currentState].title} </h2></div>
                    <button onClick={handleNextSlide}> 
                        <AiOutlineArrowRight size={30}/>
                    </button>
                </div>
                <div className="navImages">
                    {imagesCarroussel.map((item, index) => (
                        <button key={index} onClick={() => (handleChangeSlideByMenu(index))}/>
                    ))}
                </div>
        </S.FourthBanner>
    </S.Container>
}

export default Home