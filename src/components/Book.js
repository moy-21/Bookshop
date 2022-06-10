import * as React from 'react';
import { useParams } from 'react-router-dom';
import useBook from '../hooks/useBook';
import Error from './Error'
import { CircularProgress } from '@mui/material';
import BookCard from './Card'

export default function MyItem() {
    const {bookId} =  useParams()
    
    const {singleBook, error} = useBook(bookId);
    
    if (error){
      return (
        <Box sx={{display:"flex"}}>
          <Error>{error}</Error>
        </Box>
      )
    }
    if(!book){
          return(
          <Box sx={{display:"flex"}}>
            <CircularProgress/>
          </Box>
          )
        }
    return (
        <BookCard book ={singleBook}/>

    )
}