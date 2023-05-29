import styled from "styled-components";

export const Button = styled.button`

    border: 1px solid black;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    color: white;
    background-color: #92a7e7;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all .4s;
    &:hover{
        background-color: #abbeff;
    }
    &:disabled{
        background-color: lightgray;
        cursor: auto;
    }
`;