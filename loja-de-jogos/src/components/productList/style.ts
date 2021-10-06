import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    max-width: 1140px;
    width: 100%;
    grid-template-columns: calc(25% - 10px) calc(25% - 10px) calc(25% - 10px) calc(25%); 
    gap: 10px;
    padding: 1.5rem 1rem;
    
    @media (max-width: 900px){
        grid-template-columns: calc(50% - 10px) calc(50%);
        button{
            margin: 0 auto;
        }
    }

    @media (max-width: 600px){
        grid-template-columns: calc(100% - 10px);
        justify-content: center;
        text-align:center;
    }
`