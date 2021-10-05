import { Container } from './style'
import Logo from '../../assets/logo2.png'
import CartIcon from '../../assets/cart-icon.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {

    const [count, setCount] = useState(0)


    function Count() {
        setCount(count + 1)
    }
    return (
        <Container>
            <div className="container" onClick={Count}>
                <Link className="react-router-Link" to="/"><img src={Logo} alt="logo" /></Link>
                <div className="cart-container">
                    <Link className="react-router-Link" to='/carrinho'><img className="cart-icon" src={CartIcon} alt="carrinho" /></Link>
                    <label>{count}</label>
                </div>
            </div>
        </Container>
    );
}