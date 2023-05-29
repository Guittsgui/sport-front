import styled from "styled-components";

export const Container = styled.div`
    height: 350px;
    width: 300px;
    border: 1px solid #8793e0;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #00000075;


    li{
        list-style: none;
        text-align: center;
        margin-bottom: 10px;
        color: #1a1d36 ;
    }
    ul{
        border-bottom: 1px solid black;
        padding-bottom: 20px;
    }
    h2{
        color: #8793e0;
        margin: 40px;
        font-size: 25px;
        border-bottom: 1px solid #8793e0;
        padding-bottom: 10px;
    }
    .price{
        border-bottom: none;
        color: #a5afff;
        letter-spacing: 1px;
    }
`;