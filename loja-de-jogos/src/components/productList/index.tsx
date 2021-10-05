import { useEffect, useState } from "react";
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

    const [product, setProduct] = useState<ProductState[]>([]);
    const [GetIsComplete, setGetIsComplete] = useState(false)
    const [IsFilteredByScore, setIsFilteredByScore] = useState(false);
    const [isFilteredByName, setIsFilteredByName] = useState(false)

    useEffect(() => {
        if (GetIsComplete === false) {
            api.get(url)
                .then(res => setProduct(res.data))
            setGetIsComplete(true)
        }

    }, [])

    function SortScore() {
        //funcao que filtra por score/popularidade
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
    function SortName() {
        //funcao que filtra por nome
        let list = product;
        if (isFilteredByName) {
            list.reverse();
            setProduct(list);
            setIsFilteredByName(!isFilteredByName)

        } else {
            list.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            })
            setProduct(list);
            setIsFilteredByName(!isFilteredByName)
        }
    }

    return (
        <>
            <FilterProducts SortScore={SortScore} SortName={SortName} />
            <Container>

                {product.map(prod => {
                    return <Product key={prod.id} props={prod} />
                })}
            </Container>

        </>
    );
}