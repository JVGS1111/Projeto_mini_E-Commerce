import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.div`
    padding: 0.5rem;
    border: 1px solid black;
    h2{
        font-weight: 600;
        font-size: 1.5rem;
    }
    img{
        
        width: 100%;
        height: 300px;
    }
    label{
        font-weight: 400;
        font-size: 1.5rem;
        color: var(--verde);
    }
    button{
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
    }
`