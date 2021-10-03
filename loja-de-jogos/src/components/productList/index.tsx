import { useEffect, useState } from "react";
import { getDados } from "../../services/api/api";
import { Product } from "../Product";
import { Container } from "./style";

interface ProductListProps {
    url: string
}

export function ProductList({ url }: ProductListProps) {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getDados(url, setProduct)
    }, product)

    return (
        <Container>
            {product.map(prod => {
                return <Product props={prod} />
            })}
        </Container>
    );
}