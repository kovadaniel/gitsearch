import {FC} from 'react'
import UserItem from './UserItem';
import { IUser } from '../types/user';

interface UserListProps{
    loading: boolean;
    users: IUser[];
}

const UserList: FC<UserListProps> = ({loading, users}) => {
    if(loading){
        return <h1>Загрузка...</h1>
    }

    return (
        <ul className='user-list'>
            abra
            {users.map(user => 
                <UserItem key={user.id} login={user.login}/>)}
        </ul>
    );
}
 
export default UserList;