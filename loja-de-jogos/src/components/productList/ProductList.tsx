import { Product } from "../Product";
import { Container } from "./style";

export function ProductList() {
    return (
        <Container>
            <Product />
            <Product />
            <Product />
            <Product />
        </Container>
    );
}