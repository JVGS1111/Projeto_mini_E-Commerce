import { Container } from "./style";
import fifa from '../../assets/fifa-18.png'


export function Product() {
    return (
        <Container>
            <img src="../../assets/fifa-18.png" alt="" />
            <h2>Nome Do Jogo</h2>
            <label className="Price">R$ 200.00</label>
            <button type="button">Adicionar ao carrinho</button>
        </Container>
    );

}