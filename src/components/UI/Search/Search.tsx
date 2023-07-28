import {FC} from 'react'
import cl from './Search.module.css'
import { UserFilterType } from '../../../types/user';

interface SearchProps {
    type: string;
    value: string;
    placeholder?: string;
    className?: string;
    filter: UserFilterType;
    setFilter: (filter: UserFilterType) => void;
}


const Search:FC<SearchProps> = ({type, value, placeholder = '', className = '', filter, setFilter}) => {
    return (
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            className={cl.input + (' ' + className)}
            onChange={e => setFilter({...filter, query: e.target.value,})}
            />
    );
}
 
export default Search;