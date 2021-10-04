import { Container } from './style'
import Logo from '../../assets/logo2.png'
import CartIcon from '../../assets/cart-icon.svg'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Container>
            <div className="container">
                <Link className="react-router-Link" to="/"><img src={Logo} alt="logo" /></Link>
                <div className="cart-container">
                    <img className="cart-icon" src={CartIcon} alt="carrinho" />
                    <label>0</label>
                </div>
            </div>
        </Container>
    );
}