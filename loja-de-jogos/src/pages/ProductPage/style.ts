import styled from "styled-components";


export const Container = styled.main`
    max-width: 1140px;
    display: flex;
    margin: 0 auto;
    padding: 2rem 1rem;

    img{
        width: 50%;
        height: 450px;
    }
    h2{
        font-weight: 600;
        font-size: 2rem;
    }
    h3{
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--verde);
    }

    @media (max-width: 700px){
        h2{
        
        font-size: 1.5rem;
    }
        img{
            width: 50%;
            height: 200px;
        }
    }
`