import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 17px;

    span{
        color: red;
        letter-spacing: 1px;
        font-size: 12px;
    }

    input{
        border-color: ${({error}) => error ? 'red' : 'none'};
      
        &:focus{
            border-color: ${({error}) => error ? 'red' : 'none'};
            color:${({error}) => error ? 'red' : 'black'};
        }
    }
`;