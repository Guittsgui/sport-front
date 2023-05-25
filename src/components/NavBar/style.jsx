import styled from "styled-components";

export const Container = styled.nav`
    background-color: #92a7e7;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;


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
   
    
    .active{
        color: geren;
    }

    ul{
        display: flex;
        gap: 40px;
        font-size: 25px;
    }
    li{
        list-style: none;
    }
    
    `;