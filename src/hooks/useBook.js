import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import { CancelToken } from 'apisauce';


export default function useBooks(bookId){
    const [singleBook, setsingleBook]=useState([]);

    useEffect(
        ()=>{ 
            let response
            const source= CancelToken.source();
            const getSingleBook=async()=>{
                response = await apiBook.getBook(bookId, source.token)
                setsingleBook(response)
                
            }
            getSingleBook()
            return ()=>{source.cancel();}
        },
        [bookId]
    )

    return singleBook
}