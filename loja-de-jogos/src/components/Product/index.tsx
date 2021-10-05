import { Container } from "./style";
import { Link } from 'react-router-dom';
import { useCart } from "../../hook/CartContext";

interface ProductProps {
    props: {
        id: number,
        name: string,
        price: number,
        score: number,
        image: string
    }
}

export function Product({ props }: ProductProps) {
    const { addProduct } = useCart()

    function handleaddProduct() {
        addProduct(props)
    }
    return (
        <Container key={props.id}>
            <Link className="react-router-Link" to={`/product/${props.id}`}>
                <img src={require(`../../assets/${props.image}`).default} alt="" />
                <h2>{props.name}</h2>
            </Link>
            <label className="Price">R$ {props.price}</label>
            <button className="global-button" type="button" onClick={handleaddProduct
            }>Adicionar ao carrinho</button>
        </Container>
    );

}