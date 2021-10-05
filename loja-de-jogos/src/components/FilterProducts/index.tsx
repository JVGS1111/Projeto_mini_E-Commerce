import { Container } from "./styled";
import ScoreFilter from '../../assets/filterIcons/score-filter-black.png';
import AbcFilter from '../../assets/filterIcons/abc-filter-black.png';

interface FilterProducts {
    SortPerName: () => void
}

export function FilterProducts({ SortPerName }: FilterProducts) {
    return (
        <Container>
            <img src={ScoreFilter} alt="mais populares" />
            <img src={AbcFilter} onClick={SortPerName} alt="filtrar por ordem alfabetica" />
        </Container>
    );
}