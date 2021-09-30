import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin:0 20px;
    img{
        margin: 5px 10px;
        width: 40px;
        height: 40px;
    }
    span{
        font-weight: 500;
        transition: color 0.2s;
        
        &:hover{
            color: white;
        }
    }
`