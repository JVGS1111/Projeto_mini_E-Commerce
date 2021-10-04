import { darken } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light:#6933ff;

        --text-title:#363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    } */

    :root{
        --azul-escuro: #449dd1;
        --azul-claro: #78c0e0;

        --verde: #2ab523;
    }
    
    *{
        margin: 0;
        padding: 0;     
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    .react-router-Link{
        list-style: none;
        text-decoration: none;
        color: black;
        font-size: 1rem;
    }

    .global-button{
        display: flex;
        height: 3rem;
        padding: 2%;
        font-size: 1rem;
        align-items: center;
        margin: 20px 0;
        
        font-weight: 400;
        background-color: #2ab523;
        border:none;
        cursor: pointer;

        transition: background-color 0.2s;
        
        &:hover{
            background-color:${darken(0.1, '#2ab523')} 
        }

        &:active{
            background-color:${darken(0.3, '#2ab523')} 
        }
    }

`




