import { Children, createContext, ReactNode, useContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api/api";
//import { getDados } from "../services/api/api";


interface CartContextDataProps {
    children: ReactNode
}

interface CartContextData {

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
    let cartArray: Product[] = []

    function addProduct(product: Product) {
        cartArray.push(product)
        setCart(cartArray)
    }


    return <CartContext.Provider value={{}}>
        {children}
    </CartContext.Provider>
}


export function useProduct() {
    const context = useContext(CartContext);

    return context;
}