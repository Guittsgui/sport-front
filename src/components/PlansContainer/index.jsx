import * as S from './style'
const PlansContainer = ({plan}) =>{

    return <S.Container>
        <h2> {plan.title} </h2>
        <ul>
            {plan.benefits.map((item,index)=>(
                <li key={index}> {item} </li>
            ))}
        </ul>
        <h2 className='price'> {plan.price}</h2>
    </S.Container>
}

export default PlansContainer