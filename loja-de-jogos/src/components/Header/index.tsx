import { Container } from './style'
import Logo from '../../assets/logo2.png'
import CartIcon from '../../assets/cart-icon.svg'
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/CartContext';

export function Header() {

    const { prodCount } = useCart();


    return (
        <Container>
            <div className="container">
                <Link className="react-router-Link" to="/"><img src={Logo} alt="logo" /></Link>
                <div className="cart-container">
                    <Link className="react-router-Link" to='/carrinho'><img className="cart-icon" src={CartIcon} alt="carrinho" /></Link>
                    <label>{prodCount}</label>
                </div>
            </div>
        </Container>
    );
}