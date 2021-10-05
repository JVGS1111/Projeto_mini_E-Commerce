import styled from "styled-components";


export const Container = styled.div`
    button{
        float: right;        
    }

    div{
        display: flex;
        justify-content: end;
        
        
        ul{
            font-weight: 400;
            list-style-type: none;
            margin-right: 15px;
            .total{
                color: var(--verde);
            }
            li{
                font-size: 1rem;
            }
        }
    }
`