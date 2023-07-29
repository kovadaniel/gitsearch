import {FC} from 'react'
import UserItem from './UserItem';
import { IUser } from '../types/user';

interface UserListProps{
    loading: boolean;
    users: IUser[];
    error: string|null;
}

const UserList: FC<UserListProps> = ({loading, users, error}) => {
    if(error){
        return <h1 className='no-users-error'>
            Произошла ошибка: {error}
        </h1>
    }
    
    if(loading){
        return <h1>Загрузка...</h1>
    }


    return (
        <ul className='user-list'>
            {users.map(user => 
                <UserItem key={user.id} login={user.login}/>)}
        </ul>
    );
}
 
export default UserList;