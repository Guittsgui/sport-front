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
      padding: 0 40px;
      font-style: italic;
      &:hover{
          border-bottom: none;
          padding-bottom: 0px;
          .training{
            color: #5467ae;
          }
      }
      .my{
          font-size: 40px;
      }
      .training{
        font-size: 25px;
        color: #001f5c;
      }
      .app{
          font-size: 30px;
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