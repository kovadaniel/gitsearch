import {FC} from 'react'
import { NavLink } from 'react-router-dom';

interface UserItemProps {
    login: string;
}

const UserItem:FC<UserItemProps> = ({login}) => {
    return (  
        <li className='user-item' data-testid="user-item">
            <NavLink to={'/user/' + login} data-testid="user-page-ref">{login}</NavLink>
        </li>
    );
}
 
export default UserItem;