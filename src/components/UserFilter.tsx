import { Dispatch } from "redux";
import { SortTypes, UserFilterType } from "../types/user";
import Search from "./UI/Search/Search";
import SortSelect from "./UI/SortSelect/SortSelect";
import {FC} from "react"

interface UserFilterProps{
    filter: UserFilterType;
    setFilter: (filter: UserFilterType) => void;
    //setFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserFilter: FC<UserFilterProps> = ({filter, setFilter}) => {
    return (
        <div className="user-filter">
            <Search
                className='user-search' 
                type='text' 
                placeholder='Введите логин...'
                value={filter.query}
                filter={filter}
                setFilter={setFilter}
            />
            <SortSelect
                options={[
                    {title: 'По возрастанию', value: SortTypes.asc},
                    {title: 'По убыванию', value: SortTypes.desc},
                ]}
                value={filter.sort}
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
}
 
export default UserFilter;