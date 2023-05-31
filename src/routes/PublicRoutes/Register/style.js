import styled from "styled-components";

export const Container = styled.div`
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    .errorApiMsg{
        color: red;
        margin-bottom: 15px;
        border-bottom: 1px solid red;
        padding-bottom: 3px;
    }
    .acceptApiMsg{
        color: green;
        border-bottom: 1px solid green;
        padding-bottom: 3px;
    }
    .linkAccept{
        border: 1px solid blue;
        padding: 12px;
        border-radius: 20px;
        box-shadow: 2px 2px 2px #00000075;
        font-size: 16px;
    }
`;