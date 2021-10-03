import { Container } from "./style";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
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

    // useEffect(() => {
    //     const img = require(`../../assets/${props.image}`).default
    //     console.log(img);

    // })
    return (
        <Container key={props.id}>
            <Link className="react-router-Link" to={`/product/${props.id}`}>
                <img src={require(`../../assets/${props.image}`).default} alt="" />
                <h2>{props.name}</h2>
            </Link>
            <label className="Price">R$ {props.price}</label>
            <button type="button">Adicionar ao carrinho</button>
        </Container>
    );

}