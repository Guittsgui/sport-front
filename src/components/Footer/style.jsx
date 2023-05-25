import styled from "styled-components";

export const Container = styled.div`
    height: 300px;
    background-color: black;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    a{
        color: white;
    }
    
    ul{
        display: flex;
        gap: 25px;       
        li{
            list-style: none;
            
        }
    }

    p{
        letter-spacing: 2px;
    }
`;