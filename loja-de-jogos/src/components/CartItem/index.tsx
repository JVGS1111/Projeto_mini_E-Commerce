import { Conteiner } from "./style";
import LixeiraImg from '../../assets/CartItem/lixeira.png'
import { useCart } from "../../hook/CartContext";

interface ProductProps {

    id: number,
    name: string,
    price: number,
    score: number,
    image: string
    marca: string
    index: number
}
export function CartItem({ id, name, price, score, image, index, marca }: ProductProps,) {


    const { removeProduct } = useCart();
    let img = ' '

    if (image) {
        img = require(`../../assets/${image}`).default;

    }

    function handleRemoveProduct() {
        removeProduct(index);
    }

    return (
        <Conteiner data-testid="produtoListaTeste">
            <tr>
                <td><img className="img-produto" src={img} alt={name} /></td>
                <td>{name}</td>
                <td>{marca}</td>
                <td>R$ {price}</td>
                <td><img data-testid="botaoRemover" onClick={handleRemoveProduct} className="lixeira" src={LixeiraImg} alt="excluir" /></td>
            </tr>
        </Conteiner>
    );
}