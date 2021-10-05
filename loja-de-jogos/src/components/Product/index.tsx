import { Container } from "./style";
import { Link } from 'react-router-dom';

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


    function exibirObj() {
        console.log(props)
    }
    return (
        <Container key={props.id}>
            <Link className="react-router-Link" to={`/product/${props.id}`}>
                <img src={require(`../../assets/${props.image}`).default} alt="" />
                <h2>{props.name}</h2>
            </Link>
            <label className="Price">R$ {props.price}</label>
            <button className="global-button" type="button" onClick={exibirObj
            }>Adicionar ao carrinho</button>
        </Container>
    );

}