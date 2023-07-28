import {FC} from 'react'

interface UserInfoProps{
    amount: number;
}

const UserInfo:FC<UserInfoProps> = ({amount}) => {
    return (
        <div className='user-info'>
            Найдено пользователей: {amount}
        </div>
    );
}
 
export default UserInfo;