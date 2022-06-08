import React from 'react'
import BookCard from './Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useBooks from '../hooks/useBooks';
import CircularProgress from '@mui/material/CircularProgress';
import Error  from './Error';




export default function BookBrowser() {
    const bookss = useBooks()

    
   
    // if (error){
    //     return (
    //       <Box sx={{display:"flex"}}>
    //         <Error>{error}</Error>
    //       </Box>
    //     )
    //   }
    
   


    return (

        <Box sx={{ flexGrow: 1 }} >
            <Grid rowSpacing={1} container spacing ={2}>
                {bookss?.map((book)=> (
                    <Grid item sm={3} key={book.id}>
                        <BookCard book = {book}/>

                    </Grid>
                    )
                )}  
                {/* {error} */}

            </Grid>
        </Box>    
    )
 }