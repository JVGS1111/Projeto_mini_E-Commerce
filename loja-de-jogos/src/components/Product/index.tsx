import { Container } from "./style";
import img from '../../assets/fifa-18.png'

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

    ////const images = require(`../../assets/${props.image}`);

    return (
        <Container key={props.id}>
            <img src={require(`../../assets/${props.image}`).default} alt="" />
            <h2>{props.name}</h2>
            <label className="Price">R$ {props.price}</label>
            <button type="button">Adicionar ao carrinho</button>
        </Container>
    );

}