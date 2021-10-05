import { CartItem } from "../../components/CartItem";
import { CartTotal } from "../../components/CartTotal";
import { Container } from "./style";

export function CartPage() {

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
                <CartItem />
                <CartItem />
                <CartItem />

            </table>
            <CartTotal />


        </Container>
    );
}