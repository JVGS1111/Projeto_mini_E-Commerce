import { useEffect, useState } from "react";
import { useProduct } from "../../hook/ProductContext";
import { api } from "../../services/api/api";
import { FilterProducts } from "../FilterProducts";
import { Product } from "../Product";
import { Container } from "./style";

interface ProductListProps {
    url: string
}

interface ProductState {
    id: number,
    name: string,
    price: number,
    score: number,
    image: string
}


export function ProductList({ url }: ProductListProps) {
    //const { SetUrl, product } = useProduct();

    const [product, setProduct] = useState<ProductState[]>([]);
    const [GetIsComplete, setGetIsComplete] = useState(false)
    const [IsFilteredByScore, setIsFilteredByScore] = useState(false);

    useEffect(() => {
        if (GetIsComplete == false) {
            api.get(url)
                .then(res => setProduct(res.data))
            setGetIsComplete(true)
        }

    }, [])

    function SortPerName() {
        let list = product;
        if (IsFilteredByScore) {
            list.reverse();

            setProduct(list);
            setIsFilteredByScore(!IsFilteredByScore)


        } else {
            list.sort((a, b) => {
                return a.score - b.score
            })
            setProduct(list);
            setIsFilteredByScore(!IsFilteredByScore)
        }



    }

    return (
        <>
            <FilterProducts SortPerName={SortPerName} />
            <Container>

                {product.map(prod => {
                    return <Product props={prod} />
                })}
            </Container>

        </>
    );
}