import {FC, useEffect, useState, useMemo} from 'react'
import UserList from '../components/UserList';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';
import UserFilter from '../components/UserFilter';
import { SortTypes, UserFilterType } from '../types/user';
import UserInfo from '../components/UserInfo';
import Pagination from '../components/UI/Pagination/Pagination';
import { getPagesCount } from '../utils/user';
import { amoutOfUsersOnPage } from '../constants';

const Users: FC = () => {
    const {users, usersCount, error, loading} = useAppSelector(state => state.users);
    const {fetchUsers} = useActions(); // a fetchUsers() binded with our Redux dispatch()
    
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(1);

    // filter for users by amount of their repositories
    const [filter, setFilter] = useState<UserFilterType>({
        query: '',
        sort: SortTypes.desc,
    });

    useEffect(() => {
        // handling the change of the filter
        if(page === 1){
            fetchUsers(filter, page); // instead of 'dispatch(fetchUsers())' although meaning the same
        } else{
            setPage(1);
        }
    }, [filter])

       
    useEffect(() => {
        fetchUsers(filter, page); // instead of 'dispatch(fetchUsers())' although meaning the same
    }, [page])
    

    useEffect(() => {
        // when we got new 'users' by new 'filter', we have to 
        // adjust pagination (amount of pages by current 'filter')
        setTotalPages(getPagesCount(usersCount, amoutOfUsersOnPage));
    }, [users])

    if(error){
        return <h1 className='no-users-error'>
            Произошла ошибка: {error}
        </h1>
    }

    return (
        <div id='users-page' data-testid='users-page'>
            <UserFilter
                filter={filter} 
                setFilter={filter => setFilter(filter)}
            />
            {users 
            && <UserList 
                loading={loading} 
                users={users}
            />}
            <Pagination 
                totalPages={totalPages}
                page={page} 
                setPage={setPage}/>

            <UserInfo amount={usersCount}/>
        </div>
    );
}
 
export default Users;