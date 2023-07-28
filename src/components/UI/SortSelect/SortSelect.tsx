import {FC} from 'react'
import cl from './SortSelect.module.css'
import { SortTypes, UserFilterType } from '../../../types/user';

interface OptionType {
    value: SortTypes;
    title: string;
}
interface selectProps {
    options: OptionType[];
    value: SortTypes;
    className?: string;
    filter: UserFilterType;
    setFilter: (filter: UserFilterType) => void;
}

const SortSelect:FC<selectProps> = ({options, value, className = '', filter, setFilter}) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setFilter({...filter, sort: e.currentTarget.value as SortTypes});
      };
    
    return (
        <select 
            className={cl.select + ' ' + className}
            onChange={handleChange}
            value={value}>
            {options.map(option => 
                <option 
                    key={option.value}
                    value={option.value}>{option.title}</option>)}
        </select>
    );
}
 
export default SortSelect;