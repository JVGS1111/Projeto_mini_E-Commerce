import { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { ProductList } from "../../components/productList";
import { Container } from "./style";

interface idParamsProps {
    id: string
}

export function Marca() {
    const { id } = useParams<idParamsProps>();
    const { path } = useRouteMatch()
    const [title, setTitle] = useState('')

    useEffect(() => {
        titleName();
    }, [id])

    function titleName() {

        if (id === 'playstation') {
            setTitle('PlayStation')
        }
        if (id === 'xbox') {
            setTitle('Xbox')
        }
        if (id === 'nintendo') {
            setTitle('Nintendo')
        }
    }
    return (
        <Container>
            <div className="title-container">
                <h2 data-testid="marca-title">{title}</h2>
            </div>
            <Route exact path={`${path}/`}>
                <ProductList url={`/products?marca=${id}`} />
            </Route>

        </Container>
    );
}