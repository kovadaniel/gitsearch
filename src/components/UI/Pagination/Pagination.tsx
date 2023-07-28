import {FC} from 'react'
import cl from'./Pagination.module.css';
import usePagination from '../../../hooks/usePagination';

interface PaginationProps{
    totalPages: number;
    page: number;
    setPage: (page:number) => void;
}

const Pagination:FC<PaginationProps> = ({page, setPage, totalPages}) => {
    const {pages, isPagesBefore, isPagesAfter} = usePagination(page, totalPages);

    return (
        <div className={cl.pagination}>
            {isPagesBefore && <div className={cl.dots}>...</div>}
            {pages.map(p => 
                <div 
                 className={[cl.page, (p===page ? cl.active : '')].join(' ')}
                 key={p}
                 onClick={() => setPage(p)}>
                    {p}
                </div>)}
            {isPagesAfter && <div className={cl.dots}>...</div>}
        </div>
    )
}
 
export default Pagination;