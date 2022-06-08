import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import { CancelToken } from 'apisauce';


export default function useBooks(){
    const [bookss, setBookss]=useState([]);

    useEffect(
        ()=>{ 
            let response
            const source= CancelToken.source();
            const getBook=async()=>{
                response = await apiBook.getBooks(source.token)
                setBookss(response.bookss)
                
            }
            getBook()
            return ()=>{source.cancel();}
        },
        []
    )

    return bookss
}