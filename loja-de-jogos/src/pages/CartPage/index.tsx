import { CartItem } from "../../components/CartItem";
import { CartTotal } from "../../components/CartTotal";
import { useCart } from "../../hook/CartContext";
import { Container } from "./style";


export function CartPage() {

    const { cart } = useCart();

    return (

        <Container>
            <div className="title-container">
                <h2>Carrinho</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Foto do produto</th>
                        <th>Nome do produto</th>
                        <th>Marca</th>
                        <th>Valor</th>
                        <th> </th>
                    </tr>
                </thead>
                {
                    cart.map((prod, index) => {
                        return <CartItem key={index} index={index} {...prod} />
                    })
                }

            </table>
            <CartTotal />


        </Container>
    );
}