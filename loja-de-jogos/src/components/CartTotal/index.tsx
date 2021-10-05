import { Container } from "./style";


export function CartTotal() {

    return (
        <Container>
            <div>
                <ul>
                    <li>Sub-total</li>
                    <li>Frete</li>
                    <li>Total</li>
                </ul>
                <ul>
                    <li>R$ 200,00</li>
                    <li>R$ 20,00</li>
                    <li className="total">R$220,00</li>
                </ul>

            </div>
            <button className="global-button" type="button">Finalizar Pedido</button>
        </Container>
    );
}