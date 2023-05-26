import styled from "styled-components";

export const Container = styled.div`
    min-height: 600px;
    display: flex;
    flex-direction: column;
    

`;

export const Banner = styled.div`
    background-image: url(https://thumbs.dreamstime.com/b/esporte-do-triathlon-92217772.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 200px;
    margin: 20px 0;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;
    h1{
        color: #384e92;
        font-weight: bold;
        text-shadow: 1px 1px 1px #00000075;
        margin-bottom: 10px;
    }
    p{
        font-size: 18px;
        color: #838fdb;
    }
`;

export const SecondBanner = styled.div`
    height: 500px;
    background-image: url(https://blog.kuantokusta.pt/wp-content/uploads/2020/05/manter-forma-sem-ir-ginasio.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 50px;
    display: flex;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    text-shadow: 2px 2px 2px black;

`;