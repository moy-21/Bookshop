import React from 'react'
import BookCard from './Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function BookBrowser() {
  return (
    <Box sx={{ flexGrow: 1 }} >
        <Grid rowSpacing={1} container spacing ={2}>
            
            {books.map((book)=> (
                <Grid item sm={3}>
                    {BookCard({book})}

                </Grid>
                )
            
            )}  
           



        </Grid>
    </Box>    
  )
}

const book1 ={
    "author": "Arlene Dahl",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 18,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg",
    "pages": 198,
    "subject": "self help",
    "summary": "For women traveling back to the US 1950",
    "title": "ALWAYS ASK A MAN: THE KEY TO FEMININITY"
}

const book2={
    "author": "Arnetta R. Scales",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 19,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/and-on-the-eighth-day-god-created-hairdressers-book-cover.jpg",
    "pages": 222,
    "subject": "self help",
    "summary": "Becuase I just gotta get my hair did",
    "title": "AND ON THE EIGHTH DAY GOD CREATED HAIRDRESSERS"
}

const book3={
    "author": "James Maratta",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 20,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/brainwashing-is-a-cinch-book-cover.jpg",
    "pages": 321,
    "subject": "science",
    "summary": "We bother making a rational argument?",
    "title": "BRAINWASHING IS A CINCH!"
}

const book4={
    "author": "Stephanie Jackson",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 21,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/cat-flexing.jpg",
    "pages": 1295,
    "subject": "self help",
    "summary": "Who needs heavy weights when a fat cat will do",
    "title": "CATFLEXING: A CATLOVER’S GUIDE TO WEIGHTLIFTING, AEROBICS & STRETCHING"
}

const books = [book1, book2, book3, book4]