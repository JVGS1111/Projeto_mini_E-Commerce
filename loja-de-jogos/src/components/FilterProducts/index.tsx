import { Container } from "./styled";
import ScoreFilter from '../../assets/filterIcons/score-filter-black.png';
import AbcFilter from '../../assets/filterIcons/abc-filter-black.png';

interface FilterProductsPros {
    SortScore: () => void
    SortName: () => void
}

export function FilterProducts({ SortScore, SortName }: FilterProductsPros) {
    return (
        <Container>
            <img src={ScoreFilter} onClick={SortName} alt="mais populares" />
            <img src={AbcFilter} onClick={SortScore} alt="filtrar por ordem alfabetica" />
        </Container>
    );
}