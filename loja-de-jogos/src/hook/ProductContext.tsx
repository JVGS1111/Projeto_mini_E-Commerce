import { Children, createContext, ReactNode, useContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api/api";
//import { getDados } from "../services/api/api";


interface ProductContextDataProps {
    children: ReactNode
}

interface ProductContextData {
    product: Product[];
    SetUrl: (urlValue: string) => void;
}

interface Product {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
}


export const ProductContext = createContext<ProductContextData>({} as ProductContextData);

export function ProductContextData({ children }: ProductContextDataProps) {

    const [product, setProduct] = useState<Product[]>([]);
    const [url, setUrl] = useState('')

    useEffect(() => {
        api.get(url)
            .then(res => setProduct(res.data))
        console.log(product);

    }, [url])

    function SetUrl(urlValue: string) {
        setUrl(urlValue)
    }


    return <ProductContext.Provider value={{ product, SetUrl }}>
        {children}
    </ProductContext.Provider>
}


export function useProduct() {
    const context = useContext(ProductContext);

    return context;
}