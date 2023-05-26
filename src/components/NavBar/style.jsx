import styled from "styled-components";

export const Container = styled.nav`
    background-color: #92a7e7;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    a{
        color: white;
        text-decoration: none;

        &:hover{
            color: #dae1f8 ;
            border-bottom: 1px solid #dae1f8  ;
            padding-bottom: 10px;
        }
        &.active{
            color: #dae1f8;
            border-bottom: 1px solid #dae1f8  ;
            padding-bottom: 10px;
        }
    }  

    .logo{
        color: #c7c7c7;
        border: 1px solid #c7c7c7;
        padding: 15px;
        margin-left: 50px;
        &:hover{
            color: #c7c7c7;

        }
    }  

    ul{
        display: flex;
        gap: 40px;
        font-size: 25px;
        margin-right: 50px;
        li{
            list-style: none;
        }
    }
    
    `;