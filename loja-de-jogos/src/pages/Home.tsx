import { ProductList } from '../components/productList/ProductList';
import { Container } from './style'

export function Home() {

    return (
        <Container>
            <div className="title-container">
                <h2>Destaques</h2>
            </div>

            <ProductList url={"/products"} />
        </Container>
    );
}