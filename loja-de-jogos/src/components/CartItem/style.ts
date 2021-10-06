import styled from "styled-components";



export const Conteiner = styled.tbody`
    
    background-color: var(--azul-claro);
    

    td{
        border: none;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 400;
        .img-produto{
            width: 80px;
            height: 100px;
        }
        .lixeira{
            cursor: pointer;
        }
        @media (max-width: 500px){
            padding: 5px;
            font-size: 0.7rem;
 
            .img-produto{
            width: 30px;
            height: 40px;
            }   
            .lixeira{
                width: 20px;
                height: 20px;
            }
            
        }
        
    } 
        

      
    
`