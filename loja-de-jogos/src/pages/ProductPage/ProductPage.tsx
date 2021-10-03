import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDados } from "../../services/api/api";
import { Container } from "./style";

interface ProductProps {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
}
interface idParamsProps {
    id: string
}

export function ProductPage() {
    const { id } = useParams<idParamsProps>();
    const [product, setProduct] = useState<ProductProps>();

    useEffect(() => {
        getDados(`/products/${id}`, setProduct)

    }, [])

    let image = '';

    if (product) {
        image = require(`../../assets/${product?.image}`).default;
        console.log(image);

    }

    return (
        <Container>
            <img src={image} alt="" />
            <div>
                <h2>{product?.image}</h2>
                <h3>R$ {product?.price}</h3>
                <button type="button">Adicionar ao carrinhho</button>
            </div>
        </Container>
    );

}

