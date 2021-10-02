import { Container } from "./style";

export function ProductList() {
    return (
        <Container>
            <div>
                <img src="../assets/fifa-18.png" alt="" />
                <h2>Nome Do Jogo</h2>
                <label className="Price">R$ 200.00</label>
                <button type="button">Adicionar ao carrinho</button>
            </div>

            <div>
                <img src="../assets/fifa-18.png" alt="" />
                <h2>Nome Do Jogo</h2>
                <label className="Price">R$ 200.00</label>
                <button type="button">Adicionar ao carrinho</button>
            </div>

            <div>
                <img src="../assets/fifa-18.png" alt="" />
                <h2>Nome Do Jogo</h2>
                <label className="Price">R$ 200.00</label>
                <button type="button">Adicionar ao carrinho</button>
            </div>

            <div>
                <img src="../assets/fifa-18.png" alt="" />
                <h2>Nome Do Jogo</h2>
                <label className="Price">R$ 200.00</label>
                <button type="button">Adicionar ao carrinho</button>
            </div>
        </Container>
    );
}