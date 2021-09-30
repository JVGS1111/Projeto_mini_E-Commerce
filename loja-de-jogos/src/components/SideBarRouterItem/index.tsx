import { Item } from './style'

interface SideBarRouterItemProps {
    imgLink: string;
    description: string;
}
export function SideBarRouterItem({ imgLink, description }: SideBarRouterItemProps) {

    return (
        <Item>
            <img src={imgLink} alt="" />
            <span>{description}</span>
        </Item>
    );
}