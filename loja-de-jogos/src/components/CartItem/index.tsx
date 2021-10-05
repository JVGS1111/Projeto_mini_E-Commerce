import { Conteiner } from "./style";
import LixeiraImg from '../../assets/CartItem/lixeira.png'

export function CartItem() {
    return (
        <Conteiner>
            <td><img src={LixeiraImg} alt="" /></td>
            <td>forza</td>
            <td>xbox</td>
            <td>R$ 200,00</td>
            <td><img className="lixeira" src={LixeiraImg} alt="excluir" /></td>
        </Conteiner>
    )
}