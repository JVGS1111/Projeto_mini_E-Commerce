import { createContext, ReactNode, useContext, useEffect } from "react";
import { useState } from "react";


interface CartContextDataProps {
    children: ReactNode
}

interface CartContextData {
    addProduct: (product: Product) => void
    removeProduct: (index: number) => void
    cart: Product[]
    prodCount: number;
    total: number;
    frete: number;
    subtotal: number
}

interface Product {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
    marca: string
}


export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartContextData({ children }: CartContextDataProps) {

    const [cart, setCart] = useState<Product[]>([]);//estado que armazena todos os produtos
    const [prodCount, SetProdCount] = useState(0);//contador de produtos
    const [total, setTotal] = useState(0);
    const [frete, setFrete] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        calcAmount();
    }, [cart])

    function calcAmount() {
        //funcao calcula o total, frete e subtotal
        let newCart = cart;
        let subtotal = 0;
        let frete = prodCount * 10;
        newCart.forEach((item) => {
            subtotal += item.price
            if (subtotal > 250) {
                frete = 0;
            }
        })
        const total = subtotal + frete;

        setFrete(frete);
        setSubtotal(subtotal);
        setTotal(total);
    }

    function addProduct(product: Product) {
        setCart([...cart, product]);
        SetProdCount(prodCount + 1);//adiciona 1 ao indicador de produtos no header
        alert('Produto adicionado ao carrinho!');
    }

    function removeProduct(indexProp: number) {
        let newCart = cart;
        let newAmount: Product[] = [];

        newCart.map((item, index) => {
            if (index != indexProp) {

                newAmount.push(item);
            }
        })

        SetProdCount(prodCount - 1); //remove 1 ao indicador de produtos no header
        setCart([...newAmount]);
    }

    return <CartContext.Provider value={{ addProduct, cart, removeProduct, prodCount, total, frete, subtotal }}>
        {children}
    </CartContext.Provider>
}


export function useCart() {
    const context = useContext(CartContext);

    return context;
}