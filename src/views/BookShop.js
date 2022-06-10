import BookBrowser from '../components/BookBrowser'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function BookShop() {

  return (
  <>
    <Typography variant='h3'>All Books</Typography>
    <Box sx={{display:'flex', justifyContent:"center", alignContent:"center", width:'100%', mb:2}}>
        <BookBrowser/>
    </Box>

  </>
  )
}