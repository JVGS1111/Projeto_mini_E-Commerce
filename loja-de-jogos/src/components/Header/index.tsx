import { Container } from './style'
import Logo from '../../assets/logo2.png'
import CartIcon from '../../assets/cart-icon.svg'

export function Header() {
    return (
        <Container>
            <div className="container">
                <img src={Logo} alt="logo" />
                <div className="cart-container">
                    <img className="cart-icon" src={CartIcon} alt="carrinho" />
                    <label>0</label>
                </div>
            </div>
        </Container>
    );
}