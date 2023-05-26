import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    width: 450px;
    border: 2px solid #7a90d0;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #00000045;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        margin: 10px 0;
        color: #4861a0;
        border-bottom: 1px solid #4861a0;
        padding-bottom: 5px;
        margin-bottom: 40px;
    }
    a{
        font-size: 10px;
        margin-top: 15px;
        color: #6178b8 ;
        &:hover{
            color: #abbeff
        }
    }
`;