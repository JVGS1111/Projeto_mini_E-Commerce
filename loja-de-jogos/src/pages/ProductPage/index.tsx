import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useCart } from "../../hook/CartContext";
import { api, } from "../../services/api/api";
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
    let history = useHistory();
    const { addProduct } = useCart()
    let image = '';
    useEffect(() => {
        api.get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(() => {
                history.push('/404');
            })

    }, []);




    function handleaddProduct() {
        addProduct(product!)
    }

    if (product) {
        image = require(`../../assets/${product?.image}`).default;

    }

    return (
        <Container>
            <img src={image} alt="" />
            <div>
                <h2>{product?.name}</h2>
                <h3>R$ {product?.price}</h3>
                <button className="global-button" type="button" onClick={handleaddProduct}>Adicionar ao carrinhho</button>
            </div>
        </Container>
    );

}

