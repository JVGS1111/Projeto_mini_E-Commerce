import styled from 'styled-components'

export const Container = styled.header`
    padding: 0.5rem 2rem ;
    background-color: #449dd1;
    width: 100%;
    .container{
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        img{
            width: 100px;
            height: 100px;
        }

        .cart-container{
            display: flex;
            align-items: center;

            .cart-icon{
                margin-right: 10px;
                width: 50px;
                height: 50px;
            }
            
            label{
                font-size: 1.5rem;
            }
        }
        

    }

    
    

`
