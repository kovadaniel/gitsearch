import { useMemo } from "react";
import { amountOfPagesInPagination } from "../constants";

/**
 * this hook gets total amount of pages and a current page
 * and returns an object is 
 * 1. array of page numbers to be showed in pagination
 *    so that current page will be in the middle of these pages
 * 2. in additon with two propertie indication about presence of another
 *    pages before our pages. 
 * It uses useMemo() hook, so the returned array will
 * be reevaluated only if <totalPages> changes
*/


export default function usePagination(page: number, totalPages: number){
    const pages = useMemo(() => {

        let start = 1;
        
        if(page <= amountOfPagesInPagination/2){
            // if 'page' is one (ten) first pages
            start = 1;
        } else if(page > (totalPages - amountOfPagesInPagination/2)){
            // if 'page' is one (ten) last pages
            start = totalPages > amountOfPagesInPagination 
                    ? totalPages - amountOfPagesInPagination
                    : 1
        } else{
            start = page - Math.floor(amountOfPagesInPagination/2)
        }

        const pagesArray = [];
        for(let i = start; i <= totalPages && pagesArray.length <= amountOfPagesInPagination; i++){
            pagesArray.push(i);
        }
        
        // if the first page to be showed in pagination is 1 or there are no 
        //  pages all of (as no results)=> no '...' before page numbers
        const isPagesBefore:boolean = (pagesArray[0] !== 1 || pagesArray.length) ? false : true;
        // if the last page to be showed in pagination is the last one that exists
        // or there are no pages at all => no '...' after page numbers
        const isPagesAfter:boolean = (pagesArray[pagesArray.length-1]|| pagesArray.length) !== totalPages

        return {pages: pagesArray, isPagesBefore, isPagesAfter};
    }, [totalPages, page]);

    return pages;
}