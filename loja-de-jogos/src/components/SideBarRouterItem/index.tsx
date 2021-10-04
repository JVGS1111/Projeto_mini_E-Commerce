import { Link } from 'react-router-dom'
import { Item } from './style'

interface SideBarRouterItemProps {
    imgLink: string;
    description: string;
    url: string
}
export function SideBarRouterItem({ imgLink, description, url }: SideBarRouterItemProps) {

    return (
        <Link className="react-router-Link" to={`/marca/${url}`}>
            <Item>
                <img src={imgLink} />
                <span>{description}</span>
            </Item>
        </Link>

    );
}