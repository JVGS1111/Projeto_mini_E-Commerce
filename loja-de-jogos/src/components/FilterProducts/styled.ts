import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 1rem;

    img{
        margin-left: 10px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        &:hover{
            background-color: #ccc;
        }
    }
`