import styled from "styled-components";

export const Container = styled.div`
    width: 700px;
    margin-bottom: 30px;

`;

export const Header = styled.div`
    height: 50px;
    border: 2px solid #8793e0;
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    color: #8793e0;
    font-weight: bolder;
    letter-spacing: .5px;
    cursor: pointer;
    transition: all .4s;
    &:hover{
        background-color: #d7d8f7;
        color: white;
    }
`;

export const Body = styled.div`
    background-color: #ebecfb;
    min-height: 100px ;
    display: ${({clicked}) => clicked ? 'flex' : 'none'};
    align-items: center;
    text-align: center;
    padding: 10px;
    border: 2px solid #8793e0; ;
    border-top: none;
`;