import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '../../context/AppContext';
import BookCard from '../Card'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function MyList() {
    const {readingList} = useContext(AppContext)

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid rowSpacing={1} container spacing ={2}>
                {readingList?.map((book)=> (
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