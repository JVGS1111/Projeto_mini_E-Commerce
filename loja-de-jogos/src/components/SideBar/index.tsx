import { Container, Content } from "../SideBar/style";
import { SideBarRouterItem } from '../SideBarRouterItem';
import playStation from '../../assets/sidebarIcons/playstation.png';
import nintendo from '../../assets/sidebarIcons/nintendo.png';
import xbox from '../../assets/sidebarIcons/xbox.png';

export function SideBar() {
    return (
        <Container>
            <Content>
                <SideBarRouterItem imgLink={playStation} description="PlayStation" url="playstation" />
                <SideBarRouterItem imgLink={nintendo} description="Nintendo" url="nintendo" />
                <SideBarRouterItem imgLink={xbox} description="Xbox" url="xbox" />
            </Content>
        </Container>
    );
}