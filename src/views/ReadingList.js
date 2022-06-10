import { useContext } from 'react';
import MyList from '../components/ReadingList/MyList'
import { AppContext } from '../context/AppContext'
import Typography from '@mui/material/Typography';


export default function ReadingList() {
    const {readingList, setAlert, user} = useContext(AppContext)

    if (!user){
        return(
            <Typography> Login To Add Books </Typography>
        )
    }

    if (readingList.length<=0){
        return(
            <Typography variant="h3">Your List Is Empty</Typography>
        )
    }

  return (
    <MyList/>
  )
}
