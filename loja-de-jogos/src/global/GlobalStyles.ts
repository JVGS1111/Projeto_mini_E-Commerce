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

`




