import { useCart } from "../../hook/CartContext";
import { Container } from "./style";


export function CartTotal() {
    const { total, subtotal, frete } = useCart()


    // function toggleFrete() {
    //     if (frete == 0) {
    //         return 'Gratis'
    //     } else {
    //         return ('R$ ' + frete)
    //     }
    // }

    return (
        <Container>
            <div>
                <ul>
                    <li>Sub-total</li>
                    <li>Frete</li>
                    <li>Total</li>
                </ul>
                <ul>
                    <li>R$ {subtotal}</li>
                    <li>
                        {
                            frete == 0 ? 'Gratis' : ('R$ ' + frete + '.00')
                        }
                    </li>
                    <li className="total">R$ {total}</li>
                </ul>

            </div>
            <button className="global-button" type="button">Finalizar Pedido</button>
        </Container>
    );
}