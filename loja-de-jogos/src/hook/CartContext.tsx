import { Children, createContext, ReactNode, useContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api/api";
//import { getDados } from "../services/api/api";


interface CartContextDataProps {
    children: ReactNode
}

interface CartContextData {
    addProduct: (product: Product) => void
}

interface Product {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
}


export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartContextData({ children }: CartContextDataProps) {

    const [cart, setCart] = useState<Product[]>([]);
    let cartArray: Product

    useEffect(() => {
        console.log(cart);

    })

    function addProduct(product: Product) {
        //cartArray = product;
        setCart([...cart, product])

    }


    return <CartContext.Provider value={{ addProduct }}>
        {children}
    </CartContext.Provider>
}


export function useCart() {
    const context = useContext(CartContext);

    return context;
}